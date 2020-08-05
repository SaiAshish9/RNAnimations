import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';

export default function App() {
  return (
  <View
  styles={styles.ball}
  />
  );
}

const styles = StyleSheet.create({
ball:{
  height:60,
  width:60,
  borderRadius:30,
  borderWidth:30,
  borderColor:'black'
}
});
