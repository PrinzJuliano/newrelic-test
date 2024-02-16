import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'NewRelicAndroidBugs',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    hostname: 'newrelic-test.prinzjuliano.com'
  }
};

export default config;
