import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mcqsimulator.app',
  appName: 'MCQ Exam Simulator',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // Allow cross-origin requests — CapacitorHttp bypasses CORS natively,
    // but this keeps the WebView happy during local dev
    allowNavigation: [
      'api.groq.com',
      'generativelanguage.googleapis.com',
      'integrate.api.nvidia.com',
    ],
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    CapacitorSQLite: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: false,
      iosKeychainPrefix: 'mcq-sim',
      iosBiometric: {
        biometricAuth: false,
        biometricTitle: 'Biometric login for capacitor sqlite',
      },
      androidIsEncryption: false,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: 'Biometric login for capacitor sqlite',
        biometricSubTitle: 'Log in using your biometric',
      },
    },
  },
};

export default config;
