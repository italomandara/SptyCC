import { BrowserRouter, Route, Routes } from "react-router";
import SPLayout from "./components/SPLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Seasons from "./pages/Seasons";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SPLayout />}>
            <Route index element={<Home />} />
            <Route path="/seasons/:id" element={<Seasons />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
