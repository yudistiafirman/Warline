import * as Sentry from "@sentry/react-native"


const initSentry = ()=>{
  return  Sentry.init({
        dsn: "https://93df3075aa4c4410bb92c3f045432325@o4504192871497728.ingest.sentry.io/4504192873463808",
        tracesSampleRate: 1.0,
      });
}

export default initSentry
