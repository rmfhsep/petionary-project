import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Main from "./ui/pages/Main";
import Wrap from "./Wrap";
import Header from "./ui/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Wrap>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
