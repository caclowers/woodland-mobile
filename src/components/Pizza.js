import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';

class Pizza extends React.Component {

  static navigationOptions = {
    title: 'PIZZA'
  }

  onButtonPressTraditional = () => {
    this.props.navigation.navigate('traditional');
  }

  onButtonPressGourmet = () => {
    this.props.navigation.navigate('gourmet');
  }
  onButtonPressCYO = () => {
    this.props.navigation.navigate('createYourOwn');
  }

  onButtonPressHome = () => {
    this.props.navigation.navigate('home');
  }


  render() {

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View className="App-header" style={styles.header}>
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }} />
        </View >
        <Button
          title="TRADITIONAL"
          onPress={this.onButtonPressTraditional}
        />
        <Button
          title="GOURMET"
          onPress={this.onButtonPressGourmet}
        />
        <Button
          title="CREATE YOUR OWN"
          onPress={this.onButtonPressCYO}
        />
        <Button
          title="HOME"
          onPress={this.onButtonPressHome}
        />
        <View style={{ height: 64 }}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Pizza;