import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Layout from "../components/layout";
import AzureAppInsights from "../components/azureAppInsights";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AzureAppInsights>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AzureAppInsights>
  );
}

export default MyApp;
