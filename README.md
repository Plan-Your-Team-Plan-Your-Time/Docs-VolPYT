# Website

Esta web se ha construido usando [Docusaurus](https://docusaurus.io/), un generador moderno de páginas web estáticas.

Mencionar que estas guías están pensadas para usuarios en Windows.

## Comandos de utilidad

En caso de querer usar en local este proyecto, recomendable el comando `npx doucsurus start --locale es`, con mención a que la opción `locale` se usa para indicar qué configuración de idioma se quiere usar exactamente.

Antes de desplegar el proyecto, es recomendable el comando `npx docusaurus build --no-minify`, ya que éste te mostrará errores que no se ven ahora mismo por `npx docusaurus start`, como puede ser que falte un archivo de idioma. Mencionar que la opción `no-minify` sirve para no minimizar paquetes JS. Para otras opciones, ejecutar `npx docusaurus build --help`

## Idiomas

Por lo general, toda la documentación se encontrará en español, y se intentará traducir toda al inglés para poder internacionalizar el proyecto. _Importante_ es saber que, si falta algún documento en el idioma que se quiere añadir, docusaurus fallará por falta de documentación para una URL.

Si se quiere añadir un nuevo idioma, como puede ser el francés (fr), es altamente recomendable ejecutar los siguientes comandos:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/                                         
cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Así se crea la carpeta para los archivos de traducción, para otras traducciones es recomendable fijarse en los ejemplos que aparece en la lengua inglesa.