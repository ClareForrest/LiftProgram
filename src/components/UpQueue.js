import React, { useState, useEffect } from 'react';

class UpQueue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCallLevel: 0,
      currentLiftLevel: 0,
      upQueue: []
    }
  }
};

export default UpQueue;