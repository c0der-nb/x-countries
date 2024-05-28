import React from "react";
import "./Flag.module.css";

export default function Flag({image, name, alt}) {
    return (
            <div className="countryCard">
                <img className="flagImage" src={image} alt={alt} />
            
            <p>{name}</p>
            </div>
    )
}