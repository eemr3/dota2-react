import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  render() {
    const baseURL = 'https://api.opendota.com';
    return (
      <section className="dota__content-card">
        <div className="dota__card-item">
          <img src={`${baseURL}${this.props.img}`} alt="Heroes" />
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  img: PropsTypes.string.isRequired,
};
export default Card;