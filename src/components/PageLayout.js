import React from "react";
import NavBar from "./NavBar";
import Surface from "./Surface";
import NavMenu from "./NavMenu";

const PageLayout = () => {
    return (
        <div>
            {/* <NavMenu /> */}
            <NavBar />
            <Surface />
        </div>
    );
}

export default PageLayout;