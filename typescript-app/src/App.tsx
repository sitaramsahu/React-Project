import Dashboard from "./pages/Dashboard/Dashboard";
// import Header from "./components/Header/Header";
import Layout from "./components/Sidebar/Layout";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="w-full ">
        <Layout>
          <div className="bg-white shadow-sm rounded-lg p-5 w-full">
            <Dashboard />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default App;
