import React, { Component } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import PaintingInfo from './PaintingInfo';
import './main.css';

var _ = require('lodash');
var artists = require('./data/artists.json');

class Timeline extends Component {
    constructor(props, context) {
        super(props, context); 
        this.state = { 
            value: 0, 
            previous: 0,
            selectedArtist: this.props.selectedValue,
            toggleValue: this.props.toggleValue,
            artistObject: null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (prevState.artistObject == null){
            let artist = _.filter(artists, function(o) { return o.url === nextProps.selectedValue});
            return {
                artistObject: artist
            }
        }

        if (prevState.selectedArtist !== nextProps.selectedValue){
            let artist = _.filter(artists, function(o) { return o.url === nextProps.selectedValue});
            return {
                selectedArtist: nextProps.selectedValue,
                artistObject: artist
            };
        } else {
            return null;
        }
    }

    render(){
        let artistInformation = this.state.artistObject[0];
        let rangePaintings = artistInformation.rangePaintings;
        const paintingDateRange = _.map(rangePaintings, function (o) { return o.yearAsString});
        let cleanedRange = _.compact(paintingDateRange);
        let popularPaintings = artistInformation.popularPaintings;
        const popularPaintingDateRange = _.map(popularPaintings, function (o) { return o.yearAsString});
        let cleanedPopular = _.compact(popularPaintingDateRange);
        let works = this.props.toggleValue === 1 ? cleanedRange : cleanedPopular;
        let paintingObject = this.props.toggleValue === 1 ? rangePaintings[this.state.value] : popularPaintings[this.state.value];

        return (
            <div>
                <div className="artistDetails">
                    <hr></hr>
                    <h2>{artistInformation.artistName}</h2>
                </div>
                {/* Bounding box for the Timeline */}
                <div style={{ width: '80%', height: '120px', margin: '0 auto' }}>
                
                <HorizontalTimeline
                    className="timeline"
                    index={this.state.value}
                    indexClick={(index) => {
                        this.setState({ 
                            value: index, 
                            previous: this.state.value 
                        });
                    }}
                    getLabel={(label) => { return label; }}
                    values={ works } />
                
                </div>
                <div className='text-center'>
                    <PaintingInfo paintingObject={paintingObject} timelineType={this.props.toggleValue}/>
                </div>
            </div>
        )
    }
}

export default Timeline