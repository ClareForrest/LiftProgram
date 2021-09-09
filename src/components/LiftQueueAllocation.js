import { useState } from 'react';
import { LiftStatus } from './LiftStatusState';
import UpQueue from './UpQueue';
import DownQueue from './DownQueue';

const LiftQueueAllocation = (props) => {
  const {
    requestDirection
  } = props;

  if (requestDirection === 'down'){
    <DownQueue/>
  } else {
    <UpQueue/>
  }
};

export default LiftQueueAllocation;