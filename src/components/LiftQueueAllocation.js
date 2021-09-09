import { useState } from 'react';
import { LiftStatus } from './LiftStatusState';
import Queue from './Queue';

const LiftQueueAllocation = (props) => {
  const {
    requestDirection
  } = props;

  if (requestDirection === 'down'){
    <Queue/>
  }
};

export default LiftQueueAllocation;