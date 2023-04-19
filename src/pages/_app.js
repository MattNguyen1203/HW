import MainLayout from "@/layouts/main";
import "@/styles/globals.css";

const EmptyLayout = (props) => {
  return <>{props.children}</>;
};
export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}
