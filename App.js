// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

import logo from './woodland_logos_cropped.jpg';

import Hamburger from './src/components/Hamburger/Hamburger.js';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View className="App-header" style={styles.header}>
//           <Image 
//             source={logo} 
//             className="App-logo" 
//             alt="logo"
//             style={{width: 193, height: 161}}/>
//           <Hamburger />
//         </View >
//         <View style={styles.content}>
//           <Text href="something here">Home</Text>
//           <Text href="something here">Pizza</Text>
//           <Text href="something here">Sandwiches</Text>
//           <Text href="something here">Reviews</Text>
//           <Text href="something here">About</Text>
//           <Text href="something here">Directions</Text>
//         </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     marginTop: 48,
//   },
//   header:{
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     marginTop:48,
//   },
//   content:{
//     flex: 3,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   }
// });

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './src/components/Button';
import Pizza from './src/components/Pizza';
import About from './src/components/About';
import Sandwiches from './src/components/Sandwiches';
import Reviews from './src/components/Reviews';
import { createStackNavigator, createAppContainer } from 'react-navigation';



class App extends React.Component {

  static navigationOptions = {
    title: 'Home'
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
    color: 'blue'
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  pizza: Pizza,
  sandwiches: Sandwiches,
  reviews: Reviews,
  about: About,
})



export default createAppContainer(Navigation);
