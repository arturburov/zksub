type Environment = {
  name: "LOCAL" | "STAGING" | "PROD";
  zkMailingApiUrl: string;
  vaultBaseUrl: string;
  sismoHubUrl: string;
};

let env = (window as any).env as Environment;

export default env;
