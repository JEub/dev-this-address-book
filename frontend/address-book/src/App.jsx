import "./App.css";
import {RecoilRoot} from "recoil";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./views/LandingPage";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    {/* When server runs we want to have the Landing Page component render first so we set that component as the default element */}
                    <Route path='/' default element={<LandingPage/>}/>
                    <Route path='/customers/createCustomer'></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
