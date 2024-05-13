import React from "react";

function HeaderElements(){
    return (
        <div className="mainnavdiv">
            <header className="App-header">
                <a href={"startsida"}>
                    <img src={process.env.PUBLIC_URL + 'logosollefteaalpinaklubb.png'} className="solleftealogo" alt="logo"/>
                </a>
            </header>

        </div>
    );
}

export default HeaderElements;
