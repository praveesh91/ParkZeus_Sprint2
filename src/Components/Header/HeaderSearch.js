import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import './Header.scss'

const search = {
    position: 'relative',
    borderRadius: '20px',
    backgroundColor: '#5DCED7',
    '&:hover': {
      backgroundColor: 'blue',
    },
    marginRight: '20px',
    marginLeft: 0,
    width: '100%',    
}

const inputField = {
    padding: '6px 10px 7px',
    width: '100%',
}

const searchIcon = {
    // width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    right: '10px',
    pointerEvents: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',   
}

export class HeaderSearch extends Component {

    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
      };
      state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
      };

      onChange = (e) => {
        console.log('onChanges');
    
        const { options } = this.props;
        const userInput = e.currentTarget.value;
    
        const filteredOptions = options.filter(
          (optionName) =>
            optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        this.setState({
          activeOption: 0,
          filteredOptions,
          showOptions: true,
          userInput: e.currentTarget.value
        });
      };
    
      onClick = (e) => {
        this.setState({
          activeOption: 0,
          filteredOptions: [],
          showOptions: false,
          userInput: e.currentTarget.innerText
        });
      };
      onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;
    
        if (e.keyCode === 13) {
          this.setState({
            activeOption: 0,
            showOptions: false,
            userInput: filteredOptions[activeOption]
          });
        } else if (e.keyCode === 38) {
          if (activeOption === 0) {
            return;
          }
          this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
          if (activeOption === filteredOptions.length - 1) {
            console.log(activeOption);
            return;
          }
          this.setState({ activeOption: activeOption + 1 });
        }
      };
    
    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
      
            state: { activeOption, filteredOptions, showOptions, userInput }
          } = this;
          let optionList;
          if (showOptions && userInput) {
            if (filteredOptions.length) {
              optionList = (
                <ul className="options">
                  {filteredOptions.map((optionName, index) => {
                    let className;
                    if (index === activeOption) {
                      className = 'option-active';
                    }
                    return (
                      <li className={className} key={optionName} onClick={onClick}>
                        {optionName}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              optionList = (
                <div className="no-options">
                  <em>No Option!</em>
                </div>
              );
            }
          }        
          return (
            <div style={{width:'50%'}}>
                <div style={search}>
                    <InputBase
                        placeholder="Search…"
                        style={inputField}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <div style={searchIcon}>
                    <SearchIcon />
                    </div>
                    <div className="optionsContainer">
                        {optionList}
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderSearch
