---
title: Access y Refresh tokens
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Access y Refresh tokens

<p align="center">
  <img src="/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
  <strong>Escuela Técnica Superior de Ingeniería Informática</strong><br/>
  Trabajo realizado por: <strong>José María Portela Huerta</strong><br/>
  En el grado de: <strong>Ingeniería Informática – Ingeniería del Software</strong>
</p>

# Control de versiones

| Versión | Fecha | Descripción de cambios |
| ----- | ----- | :---- |
| v1.0 | 05/09/2025 | Creación del documento y añadida explicación del access y refresh token. |

## Índice

1. [Uso y utilidad de la tecnología](#uso-y-utilidad-de-la-tecnología)
2. [Actualización del Access y Refresh Token](#actualización-del-access-y-refresh-token)
3. [Memoria perdida por recarga de página](#memoria-perdida-por-recarga-de-página)

## Uso y utilidad de la tecnología

Al incluir access token y refresh token en la plataforma, se trabaja por la seguridad ante ataques informáticos, así como mantener la sesión de un usuario activa hasta que llega a tener un periodo de inactividad.

Un ataque al que puede enfrentarse un usuario normal, en una web sin access token y refresh token, es que un hacker llegue a conseguir su token de autenticación habitual, que se añade en la cabecera `Authorization: Bearer ${token}`. Al obtener dicho token, por Clickjacking, XSS o CSRF, tiene una ventana de tiempo muy elevada para hacerse pasar por otro usuario. Esto puede hacer que se hagan pasar por tí por horas o días, por eso es tan peligroso.

En cambio, Access token añade una duración corta, de 15 minutos en nuestro caso, para mitigar el problema comentado. Esta es una cifra habitual en el mercado, y que garantiza la seguridad de los usuarios.

Pero, a todo esto, hemos hablado solo del Access Token, y no del Refresh Token. Al "caducar" el access token en 15 minutos, no nos interesa que nuestros usuarios estén iniciando sesión de nuevo todo el rato. Eso exhausta, y hace que nadie quiera usar la plataforma. El refresh token nos ayuda a mantener la sesión.

El tiempo que se le da de validez al refresh token equivale al tiempo máximo que puede pasar un usuario sin entrar en la plataforma y sin tener que volver a iniciar sesión. Pasado ese tiempo, si no se realizan acciones, el usuario en dicho dispositivo "perderá" la verificación de ser dicha persona, y por tanto se cierra sesión automáticamente.

## Actualización del Access y Refresh Token

En la imagen a continuación, se puede ver un ejemplo claro de cómo funcionaría en la vida real:

![Imagen](/img/mine/Diagrama_Access_And_Refresh_Tokens--Actualizar_Tokens.svg)

1. Lo primero que hace el usuario es iniciar sesión en la plataforma. Esto hace que en su navegador se guarden dos cookies: una para el valor del refresh, y otra csrf del refresh.

Esto se hace así con la intención de evitar ataques de XSS al intentar coger el valor del REFRESH_COOKIE. La Cookie del refresh utiliza httpOnly, es decir, solo se manda por peticiones http/https y no se puede coger por Javascript. En cambio, la cookie CSRF sí se puede leer y podría ser tomada por ataques XSS, que ya se evitan en la plataforma con el escape de salida, sanitización de datos y un Content Security Policy (CSP) robustos.

También hay ataques CSRF, donde se intenta obligar al navegador a mandar forzosamente un refresh, obteniendo así, de forma gratuita, un access token válido. Esto pasa porque el refresh token, aunque no se pueda leer, se manda siempre en cada petición. Pero, como no pueden acceder a la CSRF_COOKIE, añadir su valor en una cabecera https de la aplicación da la seguridad para que no nos ataquen con CSRF. Con ello, nos aseguramos que no se haya hackeado al usuario.

Una vez entendido por qué son necesarias cada cookie, pasemos al resto de pasos:

2. Una vez se ha iniciado sesión, ahora la aplicación tiene en memoria el access token. Éste valor lo usará en cada cabecera de cada petición, para indicar quién es y que el backend valide el usuario realizando la petición.

3. Una vez se ha superado el tiempo del access token, éste se vuelve inválido. Por lo que al hacer una nueva petición, por ejemplo a los 20 minutos de recibir el access token, da un fallo de autorización y le pide al backend un nuevo valor del access y refresh token.

4. Gracias a las cookies, el backend sabe que el usuario es quien dice ser, y le concede nuevos valores del access token y refresh token. **Importante aquí**: El backend sabe que ha necesitado un nuevo valor de refresh, por lo que al dar uno nuevo, invalida el antiguo. Con esto asegura que un hacker no acceda a la aplicación, ya que esos datos no los va a volver a usar el usuario. Usará los nuevos que le ha concedido el backend.

5. Una vez se le ha dado al usuarioo los datos correctos de nuevo, se continua con la petición fallida del usuario. Así conseguimos que el usuario final no se de cuenta de que ha pasado todo este complejo proceso, y pueda continuar con el uso de la plataforma.

## Memoria perdida por recarga de página

React guarda la memoria del componente compuesto, pero una vez se destruye, al recargar la página por ejemplo, se pierde la memoria, y con ello el access token. Para solucionar éste problema, existe una solución muy simple: al construir el componente AuthProvider, siempre debe hacerse un refresh si hay cookies del refresh. Con ello, nos aseguramos que se repitan los pasos 3, 4 y 5, dando un nuevo refresh y access token.