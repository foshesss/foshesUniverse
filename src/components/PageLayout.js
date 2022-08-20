import React from "react";
import Header from "./Header";
import Surface from "./Surface";
import Introduction from "./Introduction";

const PageLayout = () => {
    return (
        <div>
            <Header />
            <Surface />
            <Introduction />
        </div>
    );
}

export default PageLayout;