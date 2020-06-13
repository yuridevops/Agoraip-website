import React from 'react'
import './styles.css'

const RowFeature = ({ title, description, image, invert }) => {
    return (
        <div className={ !invert ? "row" : "row row-white"}>
            <div className="item">
                <img src={require(`../../assets/${image}`)} alt={image} />
            </div>
            <div className="item ">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default RowFeature