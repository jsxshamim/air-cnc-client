import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import Home from "./Components/Home/Home";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
