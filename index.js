import React from "react"
import{
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home, LOGIN, SIGNUP, ResponsiveDrawer } from "./screens";


export default function Apper(){
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LOGIN />} />
                <Route path="/signup" element={<SIGNUP />} />
                <Route path="/drawer" element={<ResponsiveDrawer />} />
            </Routes>
        </Router>
    )
}