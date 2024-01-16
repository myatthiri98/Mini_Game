import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.borderColor,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.borderColor,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
