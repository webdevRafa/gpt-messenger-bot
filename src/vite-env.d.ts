/// <reference types="vite/client" />

declare module 'openai' {
  export class Configuration {
    constructor(options: { apiKey: string });
  }

  export class OpenAIApi {
    constructor(configuration: Configuration);

    createCompletion(options: {
      model: string;
      prompt: string;
      max_tokens: number;
    }): Promise<{ data: { choices: { text: string }[] } }>;
  }
}

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_OPENAI_API_KEY: string;
  // Add more environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}