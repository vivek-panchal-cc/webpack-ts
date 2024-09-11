import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import dev from './webpack.dev.js';
import prod from './webpack.prod.js';

export default function (envVars) {
  const { env } = envVars;
  const envConfig = env === 'prod' ? prod : dev;
  const config = merge(common, envConfig);
  return config;
}
