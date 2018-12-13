import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Specials extends React.Component {

  static navigationOptions = {
    title: 'Weekly Specials'
  }
 
  onButtonPressHome = () => {
    this.props.navigation.navigate('home');
  }


  render() {


    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View 
          className="App-header" 
          style={styles.header}
          >
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }}
            onPress={this.onButtonPressHome}/>
        </View >
        

        <Text style={styles.header}>
          Fall 2018
        </Text>
        <Text style={styles.description}>
          Must mention at time of order. One coupon per order. Not valid with any other offers.  Offers may end without notice.
        </Text>

        <Text style={styles.header}>
          Monday – Closed
        </Text>
        <Text style={styles.header}>
          $2 For Tuesday ‐
        </Text>
        <Text style={styles.description}>
          Any Medium Size (12") pizza‐ $2 off.
        </Text>
        
        <Text style={styles.header}>
          Wild Wednesday ‐ 
        </Text>
        <Text style={styles.description}>
          Purchase any Family size pizza of your choice‐ Receive a 14oz container of ready to bake cookie dough @ no charge.
        </Text>

        <Text style={styles.header}>
          Triple Play Thursday‐
        </Text>
        <Text style={styles.description}>
          Buy any Large (14”) or Family (16”) Sized pizza ‐ and receive a 3 piece cheesy bread @ no charge.
        </Text>
        <Text style={styles.header}>
          Woodland Weekends (Friday‐Sunday)
        </Text>
        <Text style={styles.description}>
          Buy any Med, Large or Family size pizza at regular price‐ get the 2nd one @ $2 off and get the 3rd one @ $3 off.
        </Text>

        <Text style={styles.header}>
          New Move‐in coupons (must have coupon)
        </Text>
        <Text style={styles.description}>
          Buy any size cheese pizza ‐ and receive up to 3 toppings @ no charge.
        </Text>

        <Text style={styles.header}>
          Charitable Groups or Charitable Events: 
        </Text>
        <Text style={styles.description}>
          (call for details)
        </Text>
        <Text style={styles.description}>
          Buy 5 or more any Family size pizzas‐ and receive $5 off each pizza.
        </Text>

        
        <Button
            title="HOME"
            onPress={this.onButtonPressHome}
          />
          <View style={{height: 72}}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    fontSize:18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 14
  },
  description: {
    fontSize:14,
    color: 'black',
    width: '80%'
  }
});

export default Specials;