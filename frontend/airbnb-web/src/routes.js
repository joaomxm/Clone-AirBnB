import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Teste from "./pages/teste";

import SignUp from "./pages/Signup/index"
import SignIn from "./pages/SignIn/index"

import { isAuthenticated } from "./services/auth";

function PrivateRoute({component:Component}){
    if(!isAuthenticated()){
        return <Navigate to="/" />
    }
    return <Component/>

}

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            
            <Route path='/app' element={<PrivateRoute component={Teste}/>}/>
            <Route path='*' element={<h1>Page not found!</h1>}/>
        </Routes>
    )
}
 
 