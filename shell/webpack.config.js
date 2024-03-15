const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const moduleObject = {
  ...withModuleFederationPlugin({
    shared: {
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    }
  }),
  output: {
    publicPath: "auto",
    scriptType: 'text/javascript'
  }
}
console.log(moduleObject);
module.exports = moduleObject;
