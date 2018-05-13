var fs = require("fs");
var path = require("path");

const packageJSON = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "package.json"), "utf8")
);

module.exports = {
  mode: "production",
  entry: [path.resolve(__dirname, "src", "index.js")],
  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
    library: packageJSON.name,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: Object.keys(
    Object.assign({}, packageJSON.peerDependencies, packageJSON.dependencies)
  ).reduce(function(previous, key) {
    return Object.assign({}, previous, {
      [key]: key
    });
  }, {}),
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader"
      }
    ]
  }
};
