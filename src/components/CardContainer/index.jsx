import React, { Component } from 'react';
import Card from '../Card';
import { fetApiDota } from '../../api/dotaApi';

import './CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    fetApiDota()
      .then((data) => this.setState({ images: data }) )
  }
  
  render() {
    return (
      <main className="dota__card">
        {this.state.images.map((image) => (
          <Card img={image.img} />
        ))}
      </main>
    );
  }
}

export default CardContainer;
