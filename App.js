/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DailyInputView from './Components/DailyInputView';
import styles from './styles';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  //const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, styles.appBackground]}>
      <DailyInputView dCal="100" dProt="100" />
    </View>
  );
};

export default App;
