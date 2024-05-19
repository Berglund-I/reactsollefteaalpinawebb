import React, { useState, useEffect } from 'react';
import FacebookPictureService from "../services/FacebookPictureService";

function FacebookPictureComponent() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        FacebookPictureService.getFacebookFeed().then(response => {
            setPictures(response.data);
        });
    }, []);

    return (
        <div>
            {pictures.map(picture => {
                const url = `https://www.facebook.com/photo.php?fbid=${picture.id}/&set=pb.100063470472728.-2207520000&type=3`;
                return (
                    <div key={picture.id}>
                        <p>Created Time: {picture.createdTime}</p>
                        <img src={url} alt="Facebook Picture"/>
                    </div>
                );
            })}
        </div>
    );
}

export default FacebookPictureComponent;