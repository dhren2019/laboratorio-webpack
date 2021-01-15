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

