// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {
  // console.info('asdasd');
  // Sentry.init({
  //   dsn: "https://949bea1b1f5a4985a9d4dc6671e80e91@o924101.ingest.sentry.io/5872030",
  //   integrations: [new Integrations.BrowserTracing()],

  //   // We recommend adjusting this value in production, or using tracesSampler
  //   // for finer control
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {  
  console.log(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
}