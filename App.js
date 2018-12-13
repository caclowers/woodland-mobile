import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import logo from './woodland_logos_cropped.jpg';
import Button from './src/components/Button';
import Specials from './src/components/Specials';
import Pizza from './src/components/Pizza';
import Traditional from './src/components/Traditional';
import Gourmet from './src/components/Gourmet';
import CreateYourOwn from './src/components/CreateYourOwn';
import About from './src/components/About';
import Sandwiches from './src/components/Sandwiches';
import Reviews from './src/components/Reviews';
import { createStackNavigator, createAppContainer } from 'react-navigation';




class App extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  onButtonPressSpecials = () => {
    this.props.navigation.navigate('specials');
  }
  
  onButtonPressPizza = () => {
    this.props.navigation.navigate('pizza');
  }

  onButtonPressSand = () => {
    this.props.navigation.navigate('sandwiches');
  }
  onButtonPressReviews = () => {
    this.props.navigation.navigate('reviews');
  }
  onButtonPressAbout = () => {
    this.props.navigation.navigate('about');
  }

 

  render() {


    return (
      <View style={styles.container}>
        <View className="App-header" style={styles.header}>
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }} />
        </View >
        <Text style={styles.call}>Call Ahead -</Text>
        <Text style={styles.ready}>we'll have it ready when you arrive</Text>
        <Text style={styles.phone}>(952)447-9663</Text>
        <ImageBackground 
        style={{flex: 2, width: '100%', height: '100%', alignItems: 'center',
        justifyContent: 'center',}}
        source={require('./pizzas.png')}>
          <Button
            title="WEEKLY SPECIALS"
            onPress={this.onButtonPressSpecials}
          />
          <Button
            title="PIZZA"
            onPress={this.onButtonPressPizza}
          />
          <Button
            title="SANDWICHES & EXTRAS"
            onPress={this.onButtonPressSand}
          />
          <Button
            title="REVIEWS"
            onPress={this.onButtonPressReviews}
          />
          <Button
            title="ABOUT"
            onPress={this.onButtonPressAbout}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  call: {
    fontSize: 28,
    fontWeight: 'normal'
  },
  ready: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  phone: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'cornflowerblue'
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  specials: Specials,
  pizza: Pizza,
  traditional: Traditional,
  gourmet: Gourmet,
  createYourOwn: CreateYourOwn,
  sandwiches: Sandwiches,
  reviews: Reviews,
  about: About,
})



export default createAppContainer(Navigation);
