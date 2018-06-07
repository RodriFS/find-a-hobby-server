import React, { Component } from 'react';
import './Discover.css';
import HobbyCard from './presentational/HobbyCard'
import SwipeButtons from './presentational/SwipeButtons'
import fetchRandomHobbies from '../functions/fetchRandomHobbies'

export const numberOfCards = 3;

class Discover extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hobbies : []
    }
    this.setRandomHobbies();
  }

  setRandomHobbies = async () => {
    // TODO: create a seenHobbies array so to avoid showing the same hobby twice.
    let randomHobbies = await fetchRandomHobbies();
    randomHobbies = randomHobbies.slice(0, numberOfCards);
    this.setState({hobbies: randomHobbies});
  }

  handleOnLike = () => {
    console.log('❤️');
  }

  handleOnDislike = () => {
    console.log('💔');
  }

  render() {
    return (
      <div className="Discover">
        {this.state.hobbies.map(hobby => {
          return <HobbyCard key={hobby._id} hobby={hobby}/>
        })}
        <SwipeButtons onLike={this.handleOnLike}
          onDislike={this.handleOnDislike}/>
      </div>
    );
  }
}

export default Discover;