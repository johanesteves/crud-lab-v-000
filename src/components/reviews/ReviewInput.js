import React, { Component } from 'react';
import Reviews from './Reviews';
import Review from "./Review";

class ReviewInput extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    handleChange = function (event) {
        this.setState({
            text: event.target.value
        })
    }.bind(this);

    handleSubmit = function (event) {
        event.preventDefault();
        this.props.store.dispatch({
            type: 'ADD_REVIEW',
            review: {
                text: this.state.text,
                restaurantId: this.props.restaurantId
            }
        });

        this.setState({
            text:''
        })
    }.bind(this);


    render() {

        let filteredReviews = (this.props.store && this.props.store.getState())? (this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)) : [];

        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" value={this.state.text} onChange={this.handleChange}/>
                  <input type="submit"/>
              </form>
                <Reviews resturantId={this.props.restaurantId} store={this.props.store}/>
          </div>
        );
    }
};

export default ReviewInput;
