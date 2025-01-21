import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      
      {/* Common layout for all page */}
     
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
  
}

export default MyApp
