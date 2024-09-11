import webpack from "webpack";

export default {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Panchal"),
    }),
  ],
};
