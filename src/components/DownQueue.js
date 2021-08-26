import React, { useState, useEffect } from 'react';

class DownQueue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newCallLevel: 0,
      currentLiftLevel: 0,
      downQueue: []
    }
  }
};

export default DownQueue;