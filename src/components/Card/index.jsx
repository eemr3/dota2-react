import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Card extends Component {
  render() {
    const baseURL = 'https://api.opendota.com';
    return (
      <img src={`${baseURL}${this.props.img}`} alt="Heroes"/>
    );
  }
}

Card.propTypes = {
  img: PropsTypes.string.isRequired,
};
export default Card;