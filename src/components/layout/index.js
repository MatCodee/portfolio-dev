import { Routes,Route } from "react-router-dom"

import Header from "../Header";
import Home from "../Home";
import Detail from "../Detail";
import Project from "../Project";

import CustomCursor from "../../CustomCursor/index";

const Layout = () => {
    return (
        <>
            <CustomCursor />
            <div className='container-home'>
                <Header />
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/detail/:id" element={<Detail />} />
            </Routes>
        </>
    )
}   

export default Layout