import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Timeline from './Timeline';
import './main.css';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import artists from './data/searchableArtists';

class Search extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disabled: false,
      searchable: true,
      clearable: false,
      selectValue: '',
      rtl: false,
      toggleValue: 1
    };
    this.updateValue = this.updateValue.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange(e) {
    this.setState({ toggleValue: e });
  };

  clearValue (e) {
		this.select.setInputValue('');
  };

  updateValue (newValue) {
		this.setState({
			selectValue: newValue,
		})
  }

  render() {
    let hasSelected = this.state.selectValue !== '' ? true : false; 
    return ( 
      <div className="search-section">
        <h3 className="search-heading">search an artist </h3>
        <Select
					id="state-select"
					ref={(ref) => { this.select = ref; }}
					onBlurResetsInput={false}
					onSelectResetsInput={false}
					autoFocus
					options={artists}
					simpleValue
          clearable={this.state.clearable}
					name="selected-state"
					disabled={this.state.disabled}
					value={this.state.selectValue}
					onChange={this.updateValue}
					rtl={this.state.rtl}
          searchable={this.state.searchable}
				/>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" 
              defaultValue={1} 
              onChange={this.handleToggleChange}
              >
              <ToggleButton value={1}> selections from oeuvre </ToggleButton>
              <ToggleButton value={2}> popular artworks </ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>

        {hasSelected && <Timeline selectedValue={this.state.selectValue} toggleValue={this.state.toggleValue}/>}
        {/* {hasSelected && <ArtistInfo/>} */}
      </div>
    );
  }
}

export default Search;