import React from "react";

function HeaderElements(){
    return (
        <div className="mainnavdiv">
            <header className="App-header">
                <a href={"startsida"}>
                    <img src={process.env.PUBLIC_URL + 'logosollefteaalpinaklubb.png'} className="solleftealogo" alt="logo"/>
                </a>
            </header>

            <nav className="mainnav">
                <ul>
                    <li><a href="Hem">Hem</a></li>
                    <li><a href="Träning">Träning</a></li>
                    <li><a href="Tävling">Tävling</a></li>
                    <li><a href="Bli medlem">Bli medlem</a></li>
                    <li><a href="Om föreningen">Om föreningen</a></li>
                    <li><a href="Kontakta oss">Kontakta oss</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default HeaderElements;
