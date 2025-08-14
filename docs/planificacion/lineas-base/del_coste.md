---
title: Línea base del Coste
sidebar_position: 3
---

# Línea base del Coste

<p align="center">
  <img src="/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
  <strong>Escuela Técnica Superior de Ingeniería Informática</strong><br/>
  Trabajo realizado por: <strong>José María Portela Huerta</strong><br/>
  En el grado de: <strong>Ingeniería Informática – Ingeniería del Software</strong>
</p>

# Control de versiones

| Versión | Fecha | Descripción de cambios |
| ----- | ----- | :---- |
| v1.0 | 13/08/2025 | Creación del documento y añadida la línea base del coste del proyecto. |

## Índice

1. [Línea base de costes](#línea-base-de-costes)
	1. [Presupuesto](#presupuesto)
2. [Análisis de costes](#análisis-de-costes)
	1. [CapEx](#capex)
	2. [OpEx](#opex)
	3. [TCO](#tco)

## Línea base de costes

### Presupuesto

Para realizar la aplicación web se nos ha concedido un presupuesto de 25.000€, en los cuáles se debe incluir todos los costes de recursos de personal, material e infraestructura. Es decir, se deben cubrir los costes que implica el desarrollo de la aplicación, tanto de [CapEx](#capex) como de [OpEx](#opex), para los dos meses en que se crea el proyecto.

Tras el análisis de los costes, vemos que son necesarios solo 24.490,61€ incluyendo un margen del 15% por si hay incidencias durante el proyecto. Por lo que el proyecto se puede realizar de forma adecuada.

## Análisis de costes

Se ha realizado el siguiente análisis de costes, con los datos resumidos e importantes. En caso de querer verse los datos en detalle, se podrán ver en los documentos de la carpeta de [costes](/docs/category/costes). Según la planificación realizada en MS Project, el proyecto está dividido en 5 grandes partes, cada una con una parte distinta de los costes:

- **Devising a Project (DP):** En esta fase el proyecto se centrará en la planificación y gestión de los recursos del proyecto, donde sólamente habrá costes de gestión de proyecto, así como del análisis necesario para todo el proyecto.
- **Sprint 1 (S1):** En esta fase el proyecto se centrará en conseguir el mínimo producto viable, para luego proporcionarles a los usuarios pilotos la herramienta, con el fin de obtener todos los errores y sugerencias recomendadas para ellos.
- **Sprint 2 (S2):** En esta fase el proyecto se centrará en corregir los errores encontrados en el S1, así como añadir una gestión de los recursos por parte del administrador, y los pagos de la plataforma para poder entrar en un plan u otro del proyecto.
- **Sprint 3 (S3):** En esta fase el proyecto se centrará en corregir los errores encontrados en el S2, así como añadir las funcionalidades extra que dieran tiempo para completar mejor la herramienta. Se pretenden añadir los cambios que no den tiempo tras terminar el TFG.
- **Cierre (C):** En esta última fase el proyecto será terminar la documentación de la memoria del TFG, así como realizar la presentación de éste. Con ello, se dará cierre al proyecto.

En el S1, S2 y S3 dejaríamos de tener costes de análisis o diseño, pasando a los costes de desarrolladores


### CapEx

Los gastos invertidos en el desarrollo del proyecto son los reflejados a continuación. En ellos, cabe destacar que se incluyen las suscripciones porque primero, son parte de los costes del desarrollo de la aplicación; y segundo, son costes que dudablemente van a variar de aquí a la finalización del proyecto, por la duración de éste.

| Tipo coste | Cuando se paga el recurso | Coste total |
| ------- | ------- | ------- |
| Personal | Prorrateo | 19.424,60 € |
| Licencias | Mensualmente | 0,00 € |
| Suscripciones | Mensualmente | 401,58 € |
| Materiales de la organización | Prorrateo | 1.470,00 € |
| Contingencia (15%) | - | 3.194,43 € |
| **Total** | - | **24.490,61€** |

CapEx más detallado en [este enlace](/docs/planificacion/lineas-base/costes/capex.md)

### OpEx

Los gastos invertidos para el mantenimiento del proyecto son los reflejados a continuación. En ellos, cabe destacar que se incluyen los gastos mensuales de marketing, necesarios para llegar a más público y conseguir, por tanto, mayores beneficios. Comentar que no se ha tenido en cuenta una curva de crecimiento de dicho coste porque se estudiará en el futuro qué será más conveniente.

También cabe destacar que, en estos costes, hay uno que varia bastante, pero que se ha tenido en cuenta y se puede ver en la [estimación de usuarios en la aplicación](/docs/planificacion/lineas-base/costes/estimacion_usuarios.md). Gracias a él, y a la curva de Gompertz, se ha estimado de forma realista el número de usuarios, y por tanto el coste en infraestructuras y los beneficios que entrarían en la plataforma.

| Tipo coste | Cuando se paga el recurso | Coste total |
| ------- | ------- | ------- |
| Personal | Prorrateo | 3.848,00 € |
| Licencias | Mensualmente | 0,00 € |
| Suscripciones | Mensualmente | 221,12 € |
| Gastos de marketing | Prorrateo | 1.762,00 € |
| **Total** | - | **5.831,12 €** |

Estos son los costes teóricamente fijos a lo largo de los meses. No están incluidos aquí los costes del uso de la plataforma, por su alta variabilidad a lo largo del tiempo.

OpEx más detallado en [este enlace](/docs/planificacion/lineas-base/costes/opex.md)

### TCO

El coste de propiedad aumenta según avanza en el tiempo, y más rápido de lo que parece por los datos anteriores porque aquí ya sí están incluidos los costes de mantenimiento de la plataforma, con la carga de los usuarios utilizando la aplicación.

| Mes | Optimista | Esperado | Pesimista |
| ------- | ------- | ------- | ------- |
| 0 | 24.507,64 € | 24.507,64 € | 24.507,64 € |
| 6 | 61.280,70 € | 59.724,60 € | 59.615,32 € |
| 12 | 120.516,04 € | 98.262,37 € | 95.587,50 € |
| 18 | 212.595,89 € | 150.402,83 € | 135.876,53 € |
| 24 | 320.473,94 € | 225.229,99 € | 186.811,23 € |
| 30 | 433.305,46 € | 322.232,77 € | 254.428,44 € |
| 36 | 547.504,21 € | 435.259,77 € | 341.269,21 € |
| 42 | 662.067,46 € | 558.119,77 € | 446.159,67 € |
| 48 | 776.726,99 € | 686.515,07 € | 565.862,74 € |