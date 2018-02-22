import React from 'react';
import ImageDetails from './ImageDetails';

let ImageList = (props) => {
    const RenderedImages = props.images.map((imageInfo, index) => 
        <ImageDetails key={index}
            by={imageInfo.user.name}
            link={imageInfo.urls.thumb} 
            user = {imageInfo.user.portfolio_url}
            user_bio = {imageInfo.user.bio}
            likes = {imageInfo.likes}/>
    );
    
    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

export default ImageList;