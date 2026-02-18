import CategoryList from "./components/Categories/CategoryList";
import Layout from "./components/Layout/Layout";

function App() {

  const pathname = window.location.pathname;
  return (
    <>
      <Layout>
        {pathname === '/categories' ? (
          <CategoryList />

        ) : (<h1>Test Content</h1>)}
      </Layout>
    </>
  );
}

export default App;
