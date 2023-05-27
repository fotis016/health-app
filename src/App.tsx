import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import Navbar from "./pages/Navbar";
import PharmDutiesPage from "./pages/PharmDuties";
import Vaccinations from "./pages/Vaccinations";
import FontStyles from "./theme/fonts";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="Theme">
        <ModalProvider>
          <BrowserRouter>
            <FontStyles />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="pharmduties" element={<PharmDutiesPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="vaccinations" element={<Vaccinations />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </div>
    </QueryClientProvider>
  );
};

export default App;
