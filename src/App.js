import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchResult from "./Components/Pages/SearchResult";
import Header from "./Components/Shared/Header";
import NotFound from "./Components/Shared/NotFound";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search-result" element={<SearchResult />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

export default App;
