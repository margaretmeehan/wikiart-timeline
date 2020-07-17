import React, { Component } from 'react';
import './main.css';

class ArtistInfo extends Component {
    constructor(props, context) {
        super(props, context); 
        this.state = { 
            paintingObject: this.props.paintingObject,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (prevState.paintingObject !== nextProps.paintingObject){
            return {
                paintingObject: nextProps.paintingObject,
            };
        } else {
            return null;
        }
    }

    render(){
        let painting = this.state.paintingObject;

        return(
            <div>
                <h2>{painting.title}</h2>
                <p>This piece is of the style {painting.style}.</p>
                <img className="painting" src={painting.image} alt={painting.title}/>
            </div>
        )
    }
}

export default ArtistInfo