import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './InOutContainer.css'

class InOutContainer extends Component{


  componentDidMount() {
    this.props.getRecipeList();
    this.props.getRestaurantList();
  }



  // const handleClick = (event) => {
  //   props.getRecipeList()
  // }

  render(){
    return(
    <div className="in-out">
    <div className="in-out-header">
      <h1>What is it tonight?</h1>
    </div>
      <div className="in-out-buttons">
        <Link to='/in'>
          <button type='button'>EAT IN</button>
        </Link>
        <Link to='/out'>
          <button type='button'>EAT OUT</button>
        </Link>
      </div>
    </div>
  )
};

}

export default InOutContainer;
