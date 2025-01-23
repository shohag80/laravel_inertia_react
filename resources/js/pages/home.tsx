import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function home() {
    return (
        <>
            <Header />
            <div className="container h-28 mx-auto">
                <h1 className="text-2xl text-center font-bold">Header</h1>
            </div>
            <Footer />
        </>
    );
}

export default home;
