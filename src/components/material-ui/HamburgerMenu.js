import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import '../Navbar/Navbar.css';

export default class HamburgerMenu extends Component {
    state = {
      valueSingle: '',
      valueMultiple: [],
    };
  
    handleChangeSingle = (event, value) => {
      this.setState({
        valueSingle: value,
      });
    };
  
    // handleChangeMultiple = (event, value) => {
    //   this.setState({
    //     valueMultiple: value,
    //   });
    // };
  
    // handleOpenMenu = () => {
    //   this.setState({
    //     openMenu: true,
    //   });
    // }
  
    // handleOnRequestChange = (value) => {
    //   this.setState({
    //     openMenu: value,
    //   });
    // }
  
    // multiple={true} 
    // used for multiple toggled-highlighted selections -> handleChangeMultiple

    render() {
      return (
        <div>
            <IconMenu  
          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
          
        >
          <MenuItem value="1" primaryText="Movies" />
          <MenuItem value="2" primaryText="T.V. Shows" />
          <MenuItem value="3" primaryText="Anime" />
          <MenuItem value="4" primaryText="Video Games" />
          <MenuItem value="5" primaryText="Reviewer Biographies" />
        </IconMenu>
        </div>
    );
  }
}