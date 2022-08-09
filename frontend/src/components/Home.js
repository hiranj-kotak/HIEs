import React from "react";
import Showrank from "./Showrank";

const Home = () => {
    return (
        <>
            <div class="position-relative overflow-hidden p-0 p-md-5 text-center semi-bg text-success">
                <div class="col-md-5 p-lg-5 mx-auto my-5"></div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <Showrank />
        </>
    );
};

export default Home;
