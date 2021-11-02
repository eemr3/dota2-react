import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Card extends Component {
  render() {
    const { img } = this.props.data;
    return (
      <div>
        {img}
      </div>
    );
  }
}

Card.propTypes = {
  img: PropsTypes.string.isRequired,
};
export default Card;