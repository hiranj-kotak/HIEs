import React from "react";
import Showrank from "./Showrank";

const Home = () => {
    return (
        <>
            <div class="position-relative overflow-hidden p-0 p-md-5 text-center semi-bg text-success">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    {/* <h1 class="display-4 fw-normal">Title</h1>
                    <p class="lead fw-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum porro quis minus natus voluptatibus blanditiis
                        inventore consequuntur magnam aut, a aliquam in
                        voluptatum ea, voluptates corrupti. Tempora sint eaque
                        eum.
                    </p> */}
                </div>
                <div class="product-device shadow-sm d-none d-md-block"></div>
                <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            {/* <div
                class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
                style={{ width: "100vw" }}
            >
                <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden c-2">
                    <div class="my-3 py-3">
                        <h2 class="display-5">Another headline</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div
                        class="bg-light shadow-sm mx-auto"
                        style={{
                            width: "80%",
                            height: "300px",
                            borderRadius: "21px 21px 0 0",
                        }}
                    ></div>
                </div>
                <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden c-2">
                    <div class="my-3 p-3">
                        <h2 class="display-5">Another headline</h2>
                        <p class="lead">And an even wittier subheading.</p>
                    </div>
                    <div
                        class="bg-dark shadow-sm mx-auto"
                        style={{
                            width: "80%",
                            height: "300px",
                            borderRadius: "21px 21px 0 0",
                        }}
                    ></div>
                </div>
            </div> */}
            <Showrank />
        </>
    );
};

export default Home;
