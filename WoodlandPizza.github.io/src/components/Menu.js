import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';



class Menu extends React.Component {
 
  static navigationOptions = {
    title: 'Menu'
  }
 
handleBarCodeRead = (result) => {
  console.log(result.data);
  
  this.props.navigation.navigate('home', {
    secret: result.data
  })
  
}

  render() {
 
 
    return (
      <View style={styles.container}>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  scanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Menu;