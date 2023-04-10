import * as React from 'react';
import { Switch } from 'react-native-paper';

const Switches = ({value, onToggleSwitch}) => {
  

  return <Switch value={value} onValueChange={onToggleSwitch} />;
};

export default Switches;