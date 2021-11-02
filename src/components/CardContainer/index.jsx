import React, { Component } from 'react';
import Card from '../Card';
import { fetApiDota } from '../../api/dotaApi';

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
      <main>
        {this.state.images.map((image) => (
          <Card img={image.img} />
        ))}
      </main>
    );
  }
}

export default CardContainer;
