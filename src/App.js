import {Features} from "./pages/Features/Features";
import {HeroBanner} from "./pages/HeroBanner/HeroBanner";
import {Roadmap} from "./pages/Roadmap/Roadmap";

function App() {
    return (
        <div className="content-center">
            <HeroBanner/>
            <Features/>
            <Roadmap/>
        </div>
    );
}

export default App;