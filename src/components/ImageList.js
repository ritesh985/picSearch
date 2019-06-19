import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props =>{
    //console.log(props.images);
    const im = props.images.map(image =>{
        return <ImageCard key = {image.id} image = {image} />
    });
    
    return <div className="image-list">{im}</div>;
};

export default ImageList;

