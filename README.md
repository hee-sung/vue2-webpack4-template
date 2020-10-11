Vue2 Template
=============

Technology stack
----------------
|         | version | site                                         |
|:--------|:-------:|:---------------------------------------------|
|vuejs    |2        |https://vuejs.org/                            |
|webpack  |4        |https://v4.webpack.js.org/                    |
|babel    |7        |https://babeljs.io/                           |
|eslint   |7        |https://eslint.org/   https://eslint.vuejs.org|
  

Build Setup
-----------
node, npm version information :   
  * node version : ^12.16.2   
  * npm version : ^6.14.4

install dependencies :
```bash
npm install
```

server with hot reload :
```bash
npm run dev
```

build for production with minification :
```bash
npm run build
```

build for production with minification and console log :
```bash
npm run build-c
```

Directory Structure
-------------------
```
|-- src
    |-- api
    |-- assets
        |-- scss
        |-- html
        |-- image
    |-- components (imported into pages)
        |-- common
        |-- mobile
        |-- pc
    |-- enums (constants)
    |-- js (javascript class)
    |-- locales (lanuage json) 
    |-- mixins
    |-- pages (application's views and routes.)
        |-- common
        |-- mobile
        |-- pc
    |-- router
    |-- setup (settings)
    |-- store
    |-- test (test code)
    |-- App.vue
    |-- main.js
|-- static
```