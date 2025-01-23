import React from "react";

function header() {
    return (
        <>
            <div className="flex shadow-lg">
                <div className="md:w-1/4"></div>
                <div className="md:w-2/4">
                    <h1 className="title">Hello! I'm Laravel Inertia React.</h1>
                </div>
                <div className="md:w-1/4 text-center"></div>
            </div>
        </>
    );
}

export default header;
