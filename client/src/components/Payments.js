import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        name="Emaily"
        description="$5 for 5 email credits"
        //expecting to receive a callback function, executed after form submission
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">{this.props.text}</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
