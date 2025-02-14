import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar"; // Assuming Sidebar is in the components folder

const App = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header />

        <Dashboard />
      </main>
    </div>
  );
};

export default App;
