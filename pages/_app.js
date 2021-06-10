import Layout from "../components/Layout/Layout";
import "../public/css/globals.css";
import "../public/css/devices.min.css";
import "../public/css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
