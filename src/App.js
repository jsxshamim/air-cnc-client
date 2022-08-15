import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";

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
