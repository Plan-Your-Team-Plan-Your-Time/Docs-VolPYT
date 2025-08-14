---
title: Línea base del Alcance
sidebar_position: 1
toc_min_heading_level: 2 # Índice lateral a la derecha mínimo, H2
toc_max_heading_level: 4 # Índice lateral a la derecha máximo, H4
---

# Línea base del Alcance

<p align="center">
  <img src="/img/universidad-de-sevilla-logo.png" alt="Universidad de Sevilla" width="150"/>
  <strong>Escuela Técnica Superior de Ingeniería Informática</strong><br/>
  Trabajo realizado por: <strong>José María Portela Huerta</strong><br/>
  En el grado de: <strong>Ingeniería Informática – Ingeniería del Software</strong>
</p>

# Control de versiones

| Versión | Fecha | Descripción de cambios |
| ----- | ----- | :---- |
| v1.0 | 13/08/2025 | Creación del documento y añadida la línea base del alcance del proyecto. |

## Índice

1. [Línea base del alcance](#línea-base-del-alcance)
    1. [Enunciado del alcance](#enunciado-del-alcance)
    2. [EDT](#edt)
    3. [Diccionario de la EDT](#diccionario-de-la-edt)

## Línea base del alcance

#### Enunciado del alcance

El proyecto consistirá en la integración de proyectos, tareas y entradas de tiempo que, combinadas, ayudarán a sacar en la propia plataforma métricas que suelen ser más complicadas de conseguir durante el avance del proyecto, o para proyectos futuros. Gracias a esta plataforma, se pretende fomentar la integración y conocimiento de las métricas, tanto en el campo de la informática como en el resto de trabajos en equipo.

Esta aplicación software será desarrollada de forma intuitiva y fácil de ver, incluyendo solo lo necesario para poder gestionar adecuadamente un proyecto. Será un avance a la integración entre plataformas como Clockify y GitHub Projects.

A continuación se incluirá, en formato de tabla, los supuestos, exclusiones y restricciones del proyecto:

| Supuestos | Exclusiones | Restricciones | 
| ---- | ---- | ---- |
| El cliente debe recibir la aplicación ya desplegada | El mantenimiento de la aplicación web, así como los costes asociados, fuera del tiempo de desarrollo del proyecto | La aplicación solo se encontrará en español, y la documentación en ambos idiomas |
| La aplicación tendrá una gestión entre básica y moderada, sin personalizaciones de campos ni aspectos parecidos | Solicitudes de cambio que impliquen una ampliación del alcance del proyecto, con nuevos requisitos no previstos | Presupuesto dado |
| Se realizarán los requisitos obligatorios, los suplementarios no están en el alcance, son futuras implementaciones | La inclusión de los requisitos suplementarios en el alcance del proyecto | Fecha de entrega del proyecto |

### EDT

![EDT](/img/mine/EDT.svg)

### Diccionario de la EDT

| Id y nombre de paquete | 1.1 Redacción de requisitos |
| ----- | ----- |
| **Responsable** | Analista |
| **Descripción** | Analizar y redactar los requisitos para detectar las necesidades del sistema y elaborar un diseño del sitio web mediante un prototipo mínimamente interactivo. |
| **Entregables** | E 1.1.1 Web docusaurus con la documentación del análisis realizado. |
| **Criterios de aceptación** | Revisión con el cliente de que se han conseguido comprender los detalles del servicio que pide para la web. |

| **Actividades/Hitos**                                         | **Duración** | **Recursos** |
| ------------------------------------------------------------- | ------------ | ------------ |
| 1.1.1 Objetivos generales y problema actual                   | 1.5 días     | Analista     |
| 1.1.2 Historias de usuario                                    | 3.5 días     | Analista     |
| 1.1.3 Redacción Requisitos de Información y Reglas de negocio | 1.5 días     | Analista     |
| 1.1.4 Casos de uso                                            | 2.5 días    | Analista     |
| 1.1.5 Redacción requisitos funcionales                        | 2 días       | Analista     |

---

| Id y nombre de paquete      | 1.2 Creación diseño aplicación                                                                                   |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Responsable**             | Diseñador                                                                                                        |
| **Descripción**             | Crear un diseño visual coherente, incluyendo prototipo. |
| **Entregables**             | E 1.2.1 Prototipo navegable                                                      |
| **Criterios de aceptación** | Aprobación del cliente sobre el diseño propuesto.                           |

| **Actividades/Hitos**                     | **Duración** | **Recursos** |
| ----------------------------------------- | ------------ | ------------ |
| 1.2.1 Creación de Mockups                 | 4.5 días       | Diseñador    |
| 1.2.2 Formalizar paleta de colores y logo | 1.5 días     | Diseñador    |

---


| Id y nombre de paquete | 1.3 Planificación del código |
| ----- | ----- |
| **Responsable** | Project Manager y Analista |
| **Descripción** | Planificación del código. |
| **Entregables** | E 1.3.1 Planificación del código entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Planificación del código** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 1.3.1 Creación EDT y Planificación en MS Project | 2 días | Project Manager |
| 1.3.2 Análisis de costes | 2 días | Analista |

---

| Id y nombre de paquete | 1.4 Seguimiento y control |
| ----- | ----- |
| **Responsable** | Consultor |
| **Descripción** | Seguimiento y control. |
| **Entregables** | - |
| **Criterios de aceptación** | Validación de que el alcance de **Seguimiento y control** cumple con lo planificado. |

| **Actividades/Hitos**       | **Duración** | **Recursos** |
| --------------------------- | ------------ | ------------ |
| 1.4.1 Seguimiento y control | 11 días      | Consultor    |

---

| Id y nombre de paquete | 2.1 Backend MVP |
| ----- | ----- |
| **Responsable** | Programador Backend |
| **Descripción** | Backend MVP. |
| **Entregables** | E 2.1.1 Backend MVP entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Backend MVP** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 2.1.1 Usuarios, perfil y organizaciones | 2 días | Programador Backend |
| 2.1.2 Conectar proyectos | 2 días | Programador Backend |
| 2.1.3 Añadir registros de tiempo | 2 días | Programador Backend |
| 2.1.4 Vistas | 3 días | Programador Backend |

---

| Id y nombre de paquete | 2.2 Frontend MVP |
| ----- | ----- |
| **Responsable** | Programador Frontend |
| **Descripción** | Frontend MVP. |
| **Entregables** | E 2.2.1 Frontend MVP entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Frontend MVP** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 2.2.1 Usuarios, perfil y organizaciones | 2 días | Programador Frontend |
| 2.2.2 Conectar proyectos | 2 días | Programador Frontend |
| 2.2.3 Añadir registros de tiempo | 2 días | Programador Frontend |
| 2.2.4 Vistas | 3 días | Programador Frontend |

---

| Id y nombre de paquete | 2.3 Testing MVP |
| ----- | ----- |
| **Responsable** | Programador Backend |
| **Descripción** | Testing MVP. |
| **Entregables** | E 2.3.1 Testing MVP entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Testing MVP** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 2.3.1 Usuarios, perfil y organizaciones | 2 días | Programador Backend |
| 2.3.2 Conectar proyectos | 2 días | Programador Backend |
| 2.3.3 Añadir registros de tiempo | 3 días | Programador Backend |
| 2.3.4 Vistas | 3 días | Programador Backend |

---

| Id y nombre de paquete | 2.4 Documentación y despliegue |
| ----- | ----- |
| **Responsable** | Programador Backend, Programador Frontend y Project Manager |
| **Descripción** | Documentación y despliegue. |
| **Entregables** | E 2.4.1 Documentación y despliegue entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Documentación y despliegue** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 2.4.1 Despliegue | 3 días | Programador Backend |
| 2.4.2 Replanificación Sprint 2 | 2 días | Project Manager |
| 2.4.3 Preparación correo y plantilla para usuarios piloto | 2 días | Programador Frontend |

---

| Id y nombre de paquete | 3.1 Backend pagos y admin |
| ----- | ----- |
| **Responsable** | Programador Backend |
| **Descripción** | Backend pagos y admin. |
| **Entregables** | E 3.1.1 Backend pagos y admin entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Backend pagos y admin** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 3.1.1 Modulo administrador | 3 días | Programador Backend |
| 3.1.2 Modulo pagos | 2 días | Programador Backend |

---

| Id y nombre de paquete | 3.2 Frontend pagos y admin |
| ----- | ----- |
| **Responsable** | Programador Frontend |
| **Descripción** | Frontend pagos y admin. |
| **Entregables** | E 3.2.1 Frontend pagos y admin entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Frontend pagos y admin** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 3.2.1 Modulo administrador | 3 días | Programador Frontend |
| 3.2.2 Modulo pagos | 2 días | Programador Frontend |

---

| Id y nombre de paquete | 3.3 Testing pagos y admin |
| ----- | ----- |
| **Responsable** | Programador Backend |
| **Descripción** | Testing pagos y admin. |
| **Entregables** | E 3.3.1 Testing pagos y admin entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Testing pagos y admin** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 3.3.1 Testing pagos y admin | 4 días | Programador Backend |

---

| Id y nombre de paquete | 3.4 Documentación y usuarios piloto |
| ----- | ----- |
| **Responsable** | Programador Backend, Programador Frontend y Project Manager— |
| **Descripción** | Documentación y usuarios piloto. |
| **Entregables** | E 3.4.1 Documentación y usuarios piloto entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Documentación y usuarios piloto** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 3.4.1 Evaluación plantilla usuarios piloto | 1 días | Programador Backend |
| 3.4.2 Correcciones de los usuarios piloto | 3 días | Programador Backend |
| 3.4.3 Replanificación Sprint 3 | 2 días | Project Manager |
| 3.4.4 Preparación correo y plantilla para usuarios piloto | 2 días | Programador Frontend |

---

| Id y nombre de paquete | 4.1 Desarrollo código |
| ----- | ----- |
| **Responsable** | Programador Backend y Programador Frontend |
| **Descripción** | Desarrollo código. |
| **Entregables** | E 4.1.1 Desarrollo código entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Desarrollo código** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 4.1.1 Desarrollo backend módulos opcionales | 5 días | Programador Backend |
| 4.1.2 Desarrollo frontend módulos opcionales | 4.5 días | Programador Frontend |
| 4.1.3 Testing backend | 5 días | Programador Backend |

---

| Id y nombre de paquete | 4.2 Gestión de usuarios piloto |
| ----- | ----- |
| **Responsable** | Programador Backend y Programador Frontend |
| **Descripción** | Gestión de usuarios piloto. |
| **Entregables** | E 4.2.1 Gestión de usuarios piloto entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Gestión de usuarios piloto** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 4.2.1 Evaluación plantilla usuarios piloto | 0.5 días | Programador Frontend |
| 4.2.2 Correcciones de los usuarios piloto | 4 días | Programador Backend, Programador Frontend |

---

| Id y nombre de paquete | 5. Cierre |
| ----- | ----- |
| **Responsable** | Project Manager y diseñador |
| **Descripción** | Documentación. |
| **Entregables** | E 5.1 Documentación entregable principal. |
| **Criterios de aceptación** | Validación de que el alcance de **Documentación** cumple con lo planificado. |

| **Actividades/Hitos** | **Duración** | **Recursos** |
| ----- | ----- | ----- |
| 5.1 Preparación memoria TFG | 5 días | Project Manager |
| 5.2 Preparación presentación TFG | 10 días | Diseñador |