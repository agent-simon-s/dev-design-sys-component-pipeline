#Design System Component Pipline

This is an end to end proof of concept for implementing a design system using tokens to create web-components


## Initial setup
Install the project dependencies via the CLI command:
```
npm install
```

## Project structure
/ds-src-style raw json fetched from design tools
/ds-dist-styles structured token json


## Running the project

To run style dictonary build to transform tokens
```
npm run build:tokens
```

To compile scss
```
npm run build:scss
```

To build components and copyfiles to dist-components
```
npm run build:components
```