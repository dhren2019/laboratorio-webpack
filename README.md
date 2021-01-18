# Iron Man Webpack Boiler
### &spades; Webpack + React + Typescript &spades;

![Ironman](https://github.com/dhren2019/laboratorio-webpack/blob/main/img/ironMan.jpg)

#### Install

`$ npm install `

------------

#### Iniciar Serve
`$ npm start `

------------


#### En webpack config Scripts añadidos

```json
>"scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode development"
```



#### Para evitar los errores añadir en el Webpack.config

````javascript
 stats: "errors-only",
      devServer: {
        stats: "errors-only",
      },
````



## LOADERS Y EXTENSIONES
```javascript
  module: {
    rules: [
      {
        **test: /\.(ts|tsx)$/,** //IMPORTANTE TS Y TSX
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, miniCss]
};
```

Cambiar
```diff
     test: /\.(png|jpg|gif)$/,
-        use: [
-          {
-            loader: 'file-loader',
-            options: {},
-          },
-        ],
+ type: 'asset/resource',
          },
```

Mirar las dependencias instaladas:

```
"devDependencies": {
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@babel/preset-react": "^7.12.10",
    "@babel/preset-typescript": "^7.12.7",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.0.1",
    "file-loader": "^6.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.1",
    "mini-css-extract-plugin": "^1.3.4",
    "sass": "^1.32.4",
    "sass-loader": "^10.1.1",
    "typescript": "^4.1.3",
    "webpack": "^5.13.0",
    "webpack-cli": "^4.3.1",
    "webpack-dev-server": "^3.11.2"
  },

  ```

  Presets instalados en .babelrc

  ```
  {
    "presets": ["@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"]
  }
  ```

