import { Sidebar } from "./components/Sidebar/app-sidebar";
import "./App.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Sidebar />
        <Dashboard />
      </ThemeProvider>
    </>
  );
}

export default App;
