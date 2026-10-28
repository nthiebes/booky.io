// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.
 
import webpack from 'webpack';
import config from '../webpack.config.prod';
import {
  chalkError,
  chalkSuccess,
  chalkWarning,
  chalkProcessing
} from './chalkConfig';

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log(
  chalkProcessing('Generating minified bundle. This will take a moment...')
);

 
webpack(config).run((buildError, stats) => {
  if (buildError) {
    // so a fatal error occurred. Stop here.
    console.log(chalkError(buildError));
    process.exit(1);
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    jsonStats.errors.map((error) => console.log(chalkError(error)));
    process.exit(1);
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map((warning) => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(
    chalkSuccess(
      "Your app is compiled in production mode in /_public. It's ready to roll!"
    )
  );

  // Exit explicitly: webpack keeps handles open, so the process would otherwise never end.
  process.exit(0);
});
