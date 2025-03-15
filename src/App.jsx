import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./Components/Header";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex flex-col mt-[62px] p-6">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/work" element={<ProjectScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
