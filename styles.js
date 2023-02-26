import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: '#26262e',
  },
  center: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldGrey: {
    fontWeight: '600',
    color: '#f0f0f0',
    fontSize: 20,
  },
  appComp: {
    backgroundColor: '#575763',
    padding: 20,
    margin: 20,
    borderRadius: 25,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewItem: {
    margin: 5,
  },
});

export default styles;
