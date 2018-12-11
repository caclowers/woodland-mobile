import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';



class Reviews extends React.Component {
 
  static navigationOptions = {
    title: 'REVIEWS'
  }


  render() {
 
 
    return (
      <View style={styles.container}>
            <Text>REVIEWS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Reviews;