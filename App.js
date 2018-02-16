import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Examples from './examples'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Examples />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
