import React from "react";
import { Router, Route } from "react-router";
import productTable from "../components/productTable";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductDetail from "../components/ProductDetail";
import Homepage from "../components/Home";
import UseCase from "../components/UseCase";
import Order from "../components/Order";
import UnderConstruction from "../components/UnderConstruction"
import Tracking from "../components/Tracking"
import EditUser from "../components/EditProfile"
import AddProduct from "../components/Addproduct"
import AboutUs2 from "../components/AboutUs2";
import User from "../components/User";


const Routes = props => (
    <Router {...props}>
        <Route path="/" component={Homepage} />
        <Route path="/product" component={productTable} />
        <Route path="/AboutUs" component={AboutUs2} />
        <Route exact path="/login:Semail" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/ProductDetail:id" component={ProductDetail} />
        <Route path="/UseCase" component={UseCase} />
        <Route path="/order" component={Order} />
        <Route path="/track" component={Tracking} />
        <Route path="/under" component={UnderConstruction} />
        <Route path="/edit" component={EditUser} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/user" component={User} />

    </Router>
);

export default Routes;
