import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Panchal"),
    }),
    // new BundleAnalyzerPlugin()
  ],
};
