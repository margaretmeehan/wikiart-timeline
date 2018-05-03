import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HorizontalTimeline from 'react-horizontal-timeline';
import './main.css';

var _ = require('lodash');
var famous_paintings = require('./famous_paintings.json');

class PaintingInfo extends Component {
    constructor(props, context) {
        super(props, context); 
        this.state = { 
            paintingObject: this.props.paintingObject,
            timelineType: this.props.timelineType,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (prevState.paintingObject != nextProps.paintingObject){
            return {
                paintingObject: nextProps.paintingObject,
            };
        } else {
            return null;
        }
    }
    

    render(){
        let painting = this.state.paintingObject;
        let isPopular = this.props.timelineType == 2 ? true : false;

        return(
            <div>
                <h2>{painting.title}</h2>
                <img className="painting" src={painting.image}/>
                <p><i>{painting.style}</i></p>
                <p>{isPopular && painting.description}</p>
            </div>
        )
    }
}

export default PaintingInfo