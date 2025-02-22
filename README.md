# Resume Builder

Este proyecto es un generador de CVs que permite a los usuarios crear sus CVs siguiendo la plantilla de Harvard. El objetivo es proporcionar una herramienta fácil de usar para generar currículums profesionales y bien estructurados.

## Tecnologías Principales

El monorepo utiliza una variedad de tecnologías modernas para proporcionar una experiencia de desarrollo robusta y eficiente. A continuación se describen algunas de las principales tecnologías utilizadas:

### React 19
React es una biblioteca de JavaScript para construir interfaces de usuario. En este proyecto, React se utiliza para construir componentes reutilizables y gestionar el estado de la aplicación.

### Tailwind CSS 4
Tailwind CSS es un framework de CSS utilitario que permite a los desarrolladores aplicar estilos directamente en el HTML utilizando clases predefinidas. Esto facilita la creación de interfaces de usuario consistentes y personalizables.

### Storybook
Storybook es una herramienta de desarrollo que permite a los desarrolladores construir y probar componentes de UI de manera aislada. En este proyecto, Storybook se utiliza para documentar y probar los componentes de la interfaz de usuario.

### Vite
Vite es un bundler de JavaScript que proporciona un entorno de desarrollo rápido y eficiente. Se utiliza en este proyecto para compilar y servir la aplicación durante el desarrollo.

### TypeScript
TypeScript es un superset de JavaScript que añade tipado estático al lenguaje. En este proyecto, TypeScript se utiliza para mejorar la calidad del código y facilitar el mantenimiento a largo plazo.

### Playwright
Playwright es una herramienta de automatización de pruebas para aplicaciones web. Se utiliza en este proyecto para realizar pruebas end-to-end y asegurar que la aplicación funcione correctamente en diferentes navegadores.

### Docx
Docx es una biblioteca de JavaScript para generar documentos de Word. En este proyecto, se utiliza para crear y descargar los CVs en formato DOCX.

## Estructura del Monorepo

El monorepo está organizado en varias carpetas y paquetes, cada uno con su propio propósito. A continuación se describe la estructura principal:

- `apps/resume-web`: Contiene la aplicación web principal donde los usuarios pueden crear y descargar sus CVs.
- `packages/resume-ui`: Contiene los componentes de la interfaz de usuario reutilizables.
- `packages/resume-ui-icons`: Contiene los íconos utilizados en la interfaz de usuario.
- `packages/hooks`: Contiene hooks personalizados de React.
- `packages/tailwind`: Contiene la configuración de Tailwind CSS.
- `packages/utility-types`: Contiene tipos utilitarios para TypeScript.
- `e2e/resume-web`: Contiene las pruebas end-to-end para la aplicación web.

## Scripts de Desarrollo

El proyecto incluye varios scripts de desarrollo para facilitar el trabajo con el monorepo:

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `lint`: Ejecuta ESLint para verificar la calidad del código.
- `preview`: Inicia un servidor para previsualizar la aplicación compilada.
- `storybook`: Inicia Storybook para desarrollar y probar componentes de UI.
- `build-storybook`: Compila Storybook para producción.
