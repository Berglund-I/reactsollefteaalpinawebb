import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function HomePage(){
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        // Fetch the Facebook feed from your backend when the component is mounted
        fetch('http://localhost:8080/api/feed')
            .then(response => response.json())
            .then(data => setFeed(data)); // Set the feed state to the data
    }, []);

    return (
        <div className="App">

            <aside className="welcomeheadline">
                <h1>
                    Välkommen till Sollefteå alpina
                </h1>
            </aside>

            <aside className="fb-container">
                {feed.map(post => (
                    <div key={post.id}>
                        <p>{post.message}</p>
                    </div>
                ))}
            </aside>

            <aside className="rightsidebar">
                <Link to="/member" className="button-to-become-member">Bli medlem</Link>
                <h2 className="sponsor-text">Våra samarbetspartners</h2>
            </aside>

        </div>
    )
}

export default HomePage;