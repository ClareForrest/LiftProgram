import React, { useState, useEffect } from "react";

// Lift state is passed default values, then set with new user input
class LiftStatus extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liftCalled: false,
      liftLocation: 0,
      callLocation: 0,
      userDirectionRequest: 'up',
      liftMovingDirection: 'up',
    }
  }
}

export default LiftStatus;