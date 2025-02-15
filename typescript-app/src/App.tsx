import "./App.css";
import AppRoutes from "./components/Routes/AppRoutes";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
