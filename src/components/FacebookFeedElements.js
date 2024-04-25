import React, { useEffect, useState } from 'react';

function FacebookFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const pageID = '157300127646396';
        const accessToken = 'yourAccessToken';

        fetch(`https://graph.facebook.com/${pageID}/feed?access_token=${accessToken}`)
            .then(response => response.json())
            .then(data => setPosts(data.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <p>{post.message}</p>
                </div>
            ))}
        </div>
    );
}

export default FacebookFeed;