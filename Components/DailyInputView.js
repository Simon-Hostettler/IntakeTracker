import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const DailyInputView = ({dCal, dProt}) => {
  return (
    <View style={[styles.appComp, styles.rowView]}>
      <View style={styles.colView}>
        <Text style={[styles.boldGrey, styles.viewItem]}>Calories</Text>
        <Text style={[styles.boldGrey, styles.viewItem]}>{dCal}</Text>
      </View>
      <View style={styles.colView}>
        <Text style={[styles.boldGrey, styles.viewItem]}>Protein</Text>
        <Text style={[styles.boldGrey, styles.viewItem]}>{dProt}g</Text>
      </View>
    </View>
  );
};

export default DailyInputView;
