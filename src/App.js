import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SafePeacefulDetail from "./Components/SafePeacefulDetail/SafePeacefulDetail";
import Header from "./Components/Shared/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            {/* <Footer /> */}
            <SafePeacefulDetail></SafePeacefulDetail>
        </>
    );
}

export default App;
