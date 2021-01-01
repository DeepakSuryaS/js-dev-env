import webpack from "webpack";
import chalk from "chalk";
import prodConfig from "../webpack.config.prod";

process.env.NODE_ENV = "production";

console.log(
  chalk.blue("Generating bundle for production. This may take a while...")
);

webpack(prodConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((error) => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow("Webpack generated the following warnings."));
    return jsonStats.warnings.map((warning) =>
      console.log(chalk.yellow(warning))
    );
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, build succeeded
  console.log(
    chalk.green("Your app is ready in the dist directory, have fun!")
  );

  return 0;
});
