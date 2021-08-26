import React, { useState, useEfect } from 'react';

class QueueSwitching extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upQueueEmpty: true,
      downQueueEmpty: true,
    }
  }
};

export default QueueSwitching;