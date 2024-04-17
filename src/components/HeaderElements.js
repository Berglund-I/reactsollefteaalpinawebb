import React from "react";

function HeaderElements(){
    return (
        <div className="mainnavdiv">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/solleftealogo.png'} className="solleftealogo" alt="logo"/>
            </header>

            <nav className="mainnav">
                <ul>
                    <li><a href="startsida">Hem</a></li>
                    <li><a href="training">Träning</a></li>
                    <li><a href="competing">Tävling</a></li>
                    <li><a href="member">Bli medlem</a></li>
                    <li><a href="traning">Om föreningen</a></li>
                    <li><a href="contactUs">Kontakta oss</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default HeaderElements;
