---
title: Estimación de usuarios
sidebar_position: 3
---

# Estimación de usuarios

<p align="center">
  <img src="/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
  <strong>Escuela Técnica Superior de Ingeniería Informática</strong><br/>
  Trabajo realizado por: <strong>José María Portela Huerta</strong><br/>
  En el grado de: <strong>Ingeniería Informática – Ingeniería del Software</strong>
</p>

# Control de versiones

| Versión | Fecha | Descripción de cambios |
| ----- | ----- | :---- |
| v1.0 | 13/08/2025 | Creación del documento y añadidos los datos de la estimación de usuarios del proyecto. |

## Índice

1. [OpEx](#opex)
    1. [Costes de personal](#costes-de-personal)
    2. [Costes de licencias](#costes-de-licencias)
    3. [Costes de suscripciones](#costes-de-suscripciones)
    4. [Costes de marketing](#costes-de-marketing)
    5. [Costes generales OpEx](#costes-generales-opex)

## Número estimado de usuarios

Para calcular el número de usuarios, se han mirado las siguientes fórmulas: Crecimiento compuesto discreto, Modelo exponencial, Curva logística, Gompertz. Tras estudiar el crecimiento de cada una de ellas, finalmente se realizó en análisis con la de Gompertz, al ser la que mostraba una curva más parecida a un crecimiento de usuarios propio de una plataforma normal.

A partir del análisis de competidores que se ha sacado en otro documento, se han obtenido las herramientas que tienen el mismo nicho de mercado que ésta. Y, con ayuda de Chat GPT, se ha sacado un valor estimado de 280 millones de usuarios en este tipo de herramientas.

Considerando la posibilidad de que un mismo usuario use distintas plataformas, y de posibles errores de la inteligencia artificial al coger los datos, estimaremos que el número real de usuarios es una centésima parte, es decir, 2,8 millones de usuarios. Recordar que este número de usuarios es una cifra muy aceptable, incluso solo para España, porque es una cantidad incluso pesimista del número de personas que tienen que organizarse a nivel de equipos, no solo en el campo de la informática.

Para este número de usuarios, tomaremos un porcentaje del 2% de usuarios, es decir 56.000 usuarios, que se alcanzarán en 1, 2 y 3 años para los casos optimista, esperado y pesimista respectivamente.

Para estimar cuántos usuarios hay en el paso del tiempo, se usará la fórmula de Gompertz, ya que al avanzar el tiempo la herramienta se conocerá más y avanzará más al principio, y las empresas que ya contraten el servicio seguramente necesiten ingresar más usuarios al haber crecido a lo largo del tiempo. También se usa ésta fórmula porque, al avanzar en el tiempo, se presupone que se estabilizará el número de usuarios, siendo el máximo estimado en 112.000 usuarios, el doble del esperado en los tiempos antes definidos.

Fórmula de Gompertz: $U(t)=K \cdot e^{−b \cdot e^{−rt}}$

| Parámetro | Descripción | Valor usado |
| ----- | ----- | -----: |
| K | Máximo de usuarios posible (estimado) | 112.000 |
| b | Desplazamiento horizontal de la curva | 7,5 |
| r | Tasa de crecimiento (cuán rápido crece la fórmula) | 0,22 (Optimista); 0,11 (Esperado); 0,07 (Pesimista) |
| t | Tiempo en meses. Variable para generar la curva. | Rango [0, 48] |

En un periodo de cuatro años, podemos apreciar el crecimiento de usuarios según el plan optimista, esperado y pesimista, en el siguiente gráfico:

![Gráfico sobre el crecimiento de usuarios](/img/plan/costes/num_usuarios_previstos.png)

## Coste de las peticiones

Para ver cuánto cuesta una petición en Railway, se ha tenido que realizar una serie de cálculos. Esto se debe a que Railway no pagas por petición, sino por uso de recursos. Por ello, estudiaremos ahora cuánto cuesta una petición (de forma estimada)

### Coste por petición

**Tabla de costes de Railway**

| Recurso | Datos Railway | Coste transformado | Recursos esperado por petición | Coste por petición ($) | Coste por petición (€) |
| ----- | ----- | ----- | ----- | ----- | ----- |
| Memoria | 10$ GB/mes | 0,000231481 $ GB/min | 500 MB | 1,92901E-06 $ | 1,66667E-06 € |
| CPU | 20$ vCPU/mes | 0,000462963 $ vCPU/min | 0,0167 min (1s) | 7,71605E-07 $ | 6,66667E-07 € |
| Volumes | 0,15$ GB/mes | 3,47222E-06 $ GB/min | 0,1 vCPU |  |  |
| Egress (salida de datos) | 0,05$ GB/mes | 4,76837E-08 $ kB/min |  2.000 KB | 1,58946E-06 $ | 1,37329E-06 € |
| | | | **Total** | 4,29007E-06 $ | **3,70662E-06 €** |

### Media de meticiones por usuario al mes

Aquí diferenciaremos entre el caso optimista, esperado y pesimista para las próximas tablas. Con la [Tabla de peticiones esperadas](#tabla-peticiones-esperada) sabremos cuántas peticiones aproximadas hay por plan, y con la [Tabla de usuarios por plan](#tabla-usuarios-por-plan) sabremos cuántos usuarios hay de cada tipo de plan:

<strong id="tabla-peticiones-esperada">Tabla de peticiones esperadas</strong>

|  | Optimista | Esperado | Pesimista |
| ----- | ----- | ----- | ----- |
| Peticiones x hora | 200 | 250 | 300 |
| Horas de trabajo | 8 | 8 | 8 |
| Días trabajo | 20 | 20 | 20 |
| **Total** | **32.000** | **40.000** | **48.000** |

<strong id="tabla-usuarios-por-plan">Tabla de usuarios por plan</strong>

| Plan | Precio | Optimista | Esperado | Pesimista |
| ----- | ----- | ----- | ----- | ----- |
| Starter por persona | 0 € | 11% | 40% | 60% |
| Plus por persona | 1 € | 67% | 30% | 25% |
| Pro por persona | 3 € | 22% | 30% | 15% |

Si te interesa la plataforma, puedes acceder a [nuestros planes](/pricing) para ver qué ofrecemos.

### Costes en servidores

- Optimista:

| Mes | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Usuarios | 5 | 37 | 184 | 662 | 1.842 | 4.178 | 8.050 | 13.610 | 20.720 | 29.009 | 37.978 | 47.120 | 56.000 | 64.301 | 71.826 | 78.480 | 84.248 | 89.171 | 93.318 | 96.776 | 99.637 | 101.989 | 103.911 | 105.476 | 106.746 | 107.774 | 108.604 | 109.273 | 109.811 | 110.244 | 110.592 | 110.872 | 111.096 | 111.275 | 111.420 | 111.535 | 111.628 | 111.702 | 111.761 | 111.809 | 111.847 | 111.877 | 111.902 | 111.921 | 111.937 | 111.950 | 111.960 | 111.968 | 111.974 |
| Costes de los usuarios | 17,03€ | 17,03€ | 21,87€ | 78,52€ | 218,45€ | 495,60€ | 954,88€ | 1.614,25€ | 2.457,65€ | 3.440,83€ | 4.504,67€ | 5.588,94€ | 6.642,27€ | 7.626,92€ | 8.519,42€ | 9.308,65€ | 9.992,86€ | 10.576,69€ | 11.068,59€ | 11.478,83€ | 11.818,19€ | 12.097,09€ | 12.325,10€ | 12.510,74€ | 12.661,37€ | 12.783,27€ | 12.881,70€ | 12.961,05€ | 13.024,93€ | 13.076,29€ | 13.117,56€ | 13.150,69€ | 13.177,28€ | 13.198,60€ | 13.215,69€ | 13.229,40€ | 13.240,37€ | 13.249,17€ | 13.256,22€ | 13.261,86€ | 13.266,38€ | 13.270,00€ | 13.272,90€ | 13.275,22€ | 13.277,08€ | 13.278,57€ | 13.279,76€ | 13.280,71€ | 13.281,48€ |
| Coste acumulado | 17,03€ | 34,06€ | 55,93€ | 134,45€ | 352,90€ | 848,49€ | 1.803,38€ | 3.417,63€ | 5.875,28€ | 9.316,11€ | 13.820,78€ | 19.409,72€ | 26.051,99€ | 33.678,91€ | 42.198,34€ | 51.506,98€ | 61.499,84€ | 72.076,54€ | 83.145,13€ | 94.623,96€ | 106.442,14€ | 118.539,23€ | 130.864,34€ | 143.375,08€ | 156.036,45€ | 168.819,72€ | 181.701,42€ | 194.662,47€ | 207.687,40€ | 220.763,69€ | 233.881,25€ | 247.031,95€ | 260.209,22€ | 273.407,82€ | 286.623,52€ | 299.852,91€ | 313.093,29€ | 326.342,46€ | 339.598,67€ | 352.860,53€ | 366.126,92€ | 379.396,92€ | 392.669,82€ | 405.945,04€ | 419.222,11€ | 432.500,68€ | 445.780,44€ | 459.061,15€ | 472.342,63€ |

- Esperado:

| Mes | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Usuarios | 5 | 15 | 37 | 87 | 184 | 362 | 662 | 1.136 | 1.842 | 2.838 | 4.178 | 5.906 | 8.050 | 10.621 | 13.610 | 16.990 | 20.720 | 24.747 | 29.009 | 33.441 | 37.978 | 42.557 | 47.120 | 51.615 | 56.000 | 60.238 | 64.301 | 68.169 | 71.826 | 75.264 | 78.480 | 81.473 | 84.248 | 86.811 | 89.171 | 91.336 | 93.318 | 95.127 | 96.776 | 98.276 | 99.637 | 100.872 | 101.989 | 102.999 | 103.911 | 104.734 | 105.476 | 106.145 | 106.746 |
| Costes de los usuarios | 17,03€ | 17,03€ | 17,03€ | 17,03€ | 27,34€ | 53,67€ | 98,15€ | 168,43€ | 273,06€ | 420,76€ | 619,49€ | 875,71€ | 1.193,60€ | 1.574,72€ | 2.017,81€ | 2.518,99€ | 3.072,06€ | 3.669,11€ | 4.301,04€ | 4.958,19€ | 5.630,84€ | 6.309,69€ | 6.986,17€ | 7.652,72€ | 8.302,84€ | 8.931,21€ | 9.533,66€ | 10.107,06€ | 10.649,28€ | 11.159,05€ | 11.635,81€ | 12.079,63€ | 12.491,07€ | 12.871,07€ | 13.220,87€ | 13.541,90€ | 13.835,74€ | 14.104,05€ | 14.348,54€ | 14.570,88€ | 14.772,74€ | 14.955,72€ | 15.121,36€ | 15.271,12€ | 15.406,38€ | 15.528,42€ | 15.638,43€ | 15.737,52€ | 15.826,71€ |
| Coste acumulado | 17,03€ | 34,06€ | 51,09€ | 68,12€ | 95,46€ | 149,13€ | 247,27€ | 415,70€ | 688,77€ | 1.109,52€ | 1.729,02€ | 2.604,73€ | 3.798,33€ | 5.373,05€ | 7.390,86€ | 9.909,85€ | 12.981,91€ | 16.651,02€ | 20.952,06€ | 25.910,25€ | 31.541,09€ | 37.850,77€ | 44.836,95€ | 52.489,67€ | 60.792,50€ | 69.723,72€ | 79.257,37€ | 89.364,43€ | 100.013,71€ | 111.172,75€ | 122.808,56€ | 134.888,19€ | 147.379,27€ | 160.250,34€ | 173.471,21€ | 187.013,10€ | 200.848,84€ | 214.952,90€ | 229.301,43€ | 243.872,31€ | 258.645,05€ | 273.600,76€ | 288.722,12€ | 303.993,24€ | 319.399,62€ | 334.928,04€ | 350.566,47€ | 366.303,99€ | 382.130,70€ |

- Pesimista:

| Mes | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Usuarios | 5 | 10 | 20 | 37 | 66 | 113 | 184 | 292 | 446 | 662 | 955 | 1.343 | 1.842 | 2.470 | 3.244 | 4.178 | 5.285 | 6.574 | 8.050 | 9.717 | 11.572 | 13.610 | 15.822 | 18.197 | 20.720 | 23.375 | 26.145 | 29.009 | 31.949 | 34.945 | 37.978 | 41.030 | 44.082 | 47.120 | 50.127 | 53.091 | 56.000 | 58.844 | 61.613 | 64.301 | 66.903 | 69.412 | 71.826 | 74.143 | 76.361 | 78.480 | 80.500 | 82.422 | 84.248 |
| Costes de los usuarios | 17,03€ | 17,03€ | 17,03€ | 17,03€ | 17,03€ | 20,03€ | 32,81€ | 51,86€ | 79,35€ | 117,77€ | 169,94€ | 238,86€ | 327,68€ | 439,47€ | 577,17€ | 743,39€ | 940,33€ | 1.169,62€ | 1.432,32€ | 1.728,81€ | 2.058,81€ | 2.421,38€ | 2.814,98€ | 3.237,53€ | 3.686,47€ | 4.158,90€ | 4.651,62€ | 5.161,25€ | 5.684,33€ | 6.217,38€ | 6.757,00€ | 7.299,91€ | 7.843,01€ | 8.383,41€ | 8.918,48€ | 9.445,84€ | 9.963,41€ | 10.469,34€ | 10.962,10€ | 11.440,39€ | 11.903,16€ | 12.349,61€ | 12.779,14€ | 13.191,33€ | 13.585,97€ | 13.962,97€ | 14.322,39€ | 14.664,40€ | 14.989,29€ |
| Coste acumulado | 17,03€ | 34,06€ | 51,09€ | 68,12€ | 85,15€ | 105,18€ | 137,99€ | 189,85€ | 269,20€ | 386,98€ | 556,92€ | 795,78€ | 1.123,46€ | 1.562,93€ | 2.140,10€ | 2.883,49€ | 3.823,82€ | 4.993,44€ | 6.425,76€ | 8.154,58€ | 10.213,38€ | 12.634,76€ | 15.449,74€ | 18.687,27€ | 22.373,74€ | 26.532,64€ | 31.184,26€ | 36.345,51€ | 42.029,84€ | 48.247,23€ | 55.004,23€ | 62.304,14€ | 70.147,15€ | 78.530,56€ | 87.449,04€ | 96.894,88€ | 106.858,29€ | 117.327,63€ | 128.289,73€ | 139.730,12€ | 151.633,28€ | 163.982,89€ | 176.762,02€ | 189.953,36€ | 203.539,33€ | 217.502,30€ | 231.824,69€ | 246.489,09€ | 261.478,38€ |

<p align="center">
	<img src="/img/plan/costes/gasto_servidores.png" alt="Gasto de servidores caso optimista" height="250"/>
</p>

## Beneficios y TCO desglosados

Con todo lo visto anteriormente, podemos ver el TCO mensual de la plataforma, así como los beneficios que obtiene con el paso del tiempo. A estos beneficios cabe decir que se le han quitado todos los gastos, tanto de CapEx como de OpEx, y el coste en servidores que hemos desglosado anteriormente.

| Mes | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| TCO Optimista |  24.507,64€  |  30.355,79€  |  36.208,78€  |  42.118,41€  |  48.167,99€  |  54.494,70€  |  61.280,70€  |  68.726,07€  |  77.014,84€  |  86.286,80€  |  96.622,59€  |  108.042,65€  |  120.516,04€  |  133.974,08€  |  148.324,62€  |  163.464,39€  |  179.288,37€  |  195.696,18€  |  212.595,89€  |  229.905,84€  |  247.555,15€  |  265.483,36€  |  283.639,58€  |  301.981,44€  |  320.473,94€  |  339.088,33€  |  357.801,15€  |  376.593,32€  |  395.449,37€  |  414.356,78€  |  433.305,46€  |  452.287,27€  |  471.295,67€  |  490.325,39€  |  509.372,20€  |  528.432,72€  |  547.504,21€  |  566.584,50€  |  585.671,84€  |  604.764,82€  |  623.862,32€  |  642.963,44€  |  662.067,46€  |  681.173,80€  |  700.282,00€  |  719.391,69€  |  738.502,57€  |  757.614,40€  |  776.726,99€  |
| Ganancia Optimista Acumulado | -24.500,87€  | -30.299,34€  | -35.907,09€  | -40.936,33€  | -44.536,39€  | -45.305,98€  | -41.384,86€  | -30.729,57€  | -11.460,64€  |  17.849,58€  |  58.024,79€  |  109.273,70€  |  171.280,30€  |  243.343,21€  |  324.521,25€  |  413.759,64€  |  509.985,90€  |  612.174,91€  |  719.387,67€  |  830.790,21€  |  945.658,63€  |  1.063.375,46€  |  1.183.421,02€  |  1.305.362,52€  |  1.428.842,40€  |  1.553.567,22€  |  1.679.297,35€  |  1.805.837,87€  |  1.933.030,76€  |  2.060.748,25€  |  2.188.887,21€  |  2.317.364,55€  |  2.446.113,39€  |  2.575.079,99€  |  2.704.221,19€  |  2.833.502,31€  |  2.962.895,57€  |  3.092.378,66€  |  3.221.933,72€  |  3.351.546,42€  |  3.481.205,28€  |  3.610.901,11€  |  3.740.626,55€  |  3.870.375,68€  |  4.000.143,80€  |  4.129.927,12€  |  4.259.722,60€  |  4.389.527,82€  |  4.519.340,84€  |
| TCO Esperado |  24.507,64€  |  30.355,79€  |  36.203,94€  |  42.052,09€  |  47.910,55€  |  53.795,34€  |  59.724,60€  |  65.724,15€  |  71.828,33€  |  78.080,21€  |  84.530,82€  |  91.237,65€  |  98.262,37€  |  105.668,22€  |  113.517,15€  |  121.867,26€  |  130.770,44€  |  140.270,67€  |  150.402,83€  |  161.192,14€  |  172.654,09€  |  184.794,90€  |  197.612,19€  |  211.096,03€  |  225.229,99€  |  239.992,32€  |  255.357,10€  |  271.295,28€  |  287.775,68€  |  304.765,84€  |  322.232,77€  |  340.143,52€  |  358.465,71€  |  377.167,91€  |  396.219,89€  |  415.592,91€  |  435.259,77€  |  455.194,94€  |  475.374,60€  |  495.776,60€  |  516.380,45€  |  537.167,29€  |  558.119,77€  |  579.222,01€  |  600.459,51€  |  621.819,05€  |  643.288,59€  |  664.857,23€  |  686.515,07€  |
| Ganancia Esperado Acumulado | -24.501,54€  | -30.332,20€  | -36.135,53€  | -41.879,57€  | -47.516,76€  | -52.967,16€  | -58.102,07€  | -62.738,44€  | -66.632,55€  | -69.478,97€  | -70.915,64€  | -70.534,82€  | -67.898,98€  | -62.559,63€  | -54.077,14€  | -42.039,54€  | -26.078,63€  | -5.882,48€  |  18.796,35€  |  48.136,71€  |  82.248,58€  |  121.175,96€  |  164.902,09€  |  213.356,43€  |  266.422,47€  |  323.945,95€  |  385.742,94€  |  451.607,42€  |  521.318,22€  |  594.645,10€  |  671.353,95€  |  751.211,12€  |  833.986,89€  |  919.458,24€  |  1.007.410,90€  |  1.097.640,82€  |  1.189.955,13€  |  1.284.172,78€  |  1.380.124,69€  |  1.477.653,80€  |  1.576.614,82€  |  1.676.873,83€  |  1.778.307,85€  |  1.880.804,23€  |  1.984.260,08€  |  2.088.581,60€  |  2.193.683,50€  |  2.299.488,33€  |  2.405.925,87€  |
| TCO Pesimista |  24.507,64€  |  30.355,79€  |  36.203,94€  |  42.052,09€  |  47.900,24€  |  53.751,39€  |  59.615,32€  |  65.498,30€  |  71.408,77€  |  77.357,67€  |  83.358,72€  |  89.428,71€  |  95.587,50€  |  101.858,10€  |  108.266,39€  |  114.840,90€  |  121.612,35€  |  128.613,09€  |  135.876,53€  |  143.436,46€  |  151.326,39€  |  159.578,89€  |  168.224,99€  |  177.293,63€  |  186.811,23€  |  196.801,25€  |  207.283,99€  |  218.276,36€  |  229.791,81€  |  241.840,31€  |  254.428,44€  |  267.559,47€  |  281.233,60€  |  295.448,13€  |  310.197,72€  |  325.474,69€  |  341.269,21€  |  357.569,68€  |  374.362,90€  |  391.634,40€  |  409.368,68€  |  427.549,41€  |  446.159,67€  |  465.182,12€  |  484.599,21€  |  504.393,30€  |  524.546,81€  |  545.042,34€  |  565.862,74€  |
| Ganancia Pesimista Acumulado | -24.504,08€  | -30.344,95€  | -36.178,98€  | -42.000,98€  | -47.802,80€  | -53.575,13€  | -59.309,99€  | -64.988,92€  | -70.587,19€  | -76.072,71€  | -81.405,17€  | -86.535,36€  | -91.404,95€  | -95.946,49€  | -100.083,96€  | -103.733,67€  | -106.805,50€  | -109.204,48€  | -110.832,60€  | -111.590,70€  | -111.380,45€  | -110.106,29€  | -107.677,14€  | -104.008,07€  | -99.021,61€  | -92.648,86€  | -84.830,28€  | -75.516,24€  | -64.667,28€  | -52.254,13€  | -38.257,51€  | -22.667,79€  | -5.484,41€  |  13.284,73€  |  33.623,97€  |  55.510,71€  |  78.916,18€  |  103.806,27€  |  130.142,31€  |  157.881,83€  |  186.979,31€  |  217.386,86€  |  249.054,80€  |  281.932,30€  |  315.967,82€  |  351.109,60€  |  387.306,06€  |  424.506,13€  |  462.659,53€  |


<p align="center">
	<img src="/img/plan/costes/momentos_rentabilidad.png" alt="Momento de rentabilidad para cada caso" height="250"/>
	<img src="/img/plan/costes/beneficios_48meses.png" alt="Beneficios finales en los primeros 48 meses" height="250"/>
</p>

En resumen, por lo que podemos ver en las gráficas, la plataforma se vuelve rentable a los 9, 18 y 33 meses para los casos optimista, esperado y pesimista.