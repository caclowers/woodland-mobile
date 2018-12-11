import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Sandwiches extends React.Component {
 
  static navigationOptions = {
    title: 'SANDWICHES & EXTRAS'
  }

  onButtonPressHome = () => {
    this.props.navigation.navigate('home');
  }

  render() {


    return (
      <View style={styles.container}>
        <View className="App-header" style={styles.header}>
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 96, height: 80 }} />
        </View >
        
          <Text>
          Sandwiches:  
All come on a 7" ciabatta roll, multigrain, and (parmesian rosemary ciabatta coming soon!!)
 
The Grand Teton: $7.00    
white garlic sauce, grilled chicken, red onions, roma tomatoes, spinach and asiago cheese
The Jackpine Savage: $7.00   
alfredo sauce, grilled chicken, jalapeno bacon, roasted peppers and onions with pepperjack cheese
The Brotherly Love: $7.00  
alfredo sauce, seasoned steak, onion medley, green peppers and pepperjack cheese
The Voyagers:  $7.00  
white garlic sauce, onion medley, artichoke hearts, kalamata olives, spinach, roma tomatoes and feta cheese
The Classic Pizza: $7.00 
pizza sauce, pepperoni and sausage smothered with our 3-cheese blend
The Classic Meatball: $7.00  
3 of our italian meatballs cut in 1/2, smothered with our 3-cheese blend.  Comes with a cup of roasted garlic marinera sauce for dipping.
 The Chicken Bacon: $7.00  
grilled chicken, crispy bacon, mayo, onion medley, american cheese, lettuce, roma tomatoes and creamy ranch dressing
The Classic Turkey:  $6.50  
roasted turkey, mayo, onion medley, american cheese, lettuce and roma tomatoes
The Classic BLT:  $6.00  
crispy bacon, mayo, lettuce, tomatoes and american cheese   add turkey for $1.00 extra
The Woodland Club:  $7.00  
roasted turkey, pepperoni, crispy bacon, mayo, lettuce, onion medley, roma tomatoes and american cheese
The Toasted PB & J:  $4.00  
peanut butter and jelly on a toasted bun
Gyros: $4.50 (2 for $7.00)   
gyro meat, tzatziki sauce, onion medley and roma tomatoes on a 6" pita

Extra Sandwich Toppings:
Add extra meat to any sandwich for $1.00  Add extra cheese to any sandwich for $.50
Add unlimited vegi's free of charge.
We allow substitutions, how you want it is how we make it.

Soup:   
Soup of the day:  cup $3.50  bowl $4.50
 
Salads:
Build Your Own:  side $3.00regular $3.00
add any meat$1.00$1.50choose from chicken, crispy bacon, pepperoni or canadian bacon
add extra cheese$0.50$1.00
add 5 more veggies    $0.50$1.00
 
green olives, green peppers, black olives, kalamata olives, craisens, sunflower seeds, onion medley, jalapeno peppers, banana pepper rings, mushrooms, pineapple, sundried tomatoes
 
Personal Pizzas:  Yes, we cook them!!!:  
Create your own personal pizza with any 3 of our pizza toppings for $5.00
Upgrade to a gourmet or traditional combo for $6.00     
additional toppings only $.50 each

Pizza By The Slice (11:00am-2:00pm)
1 slice: $3.00
2 slices + pop = $6.00


Appetizers:
Chips: $1.50
Garlic Bread (5 piece):  $4.50 (2 piece): $2.50
Cheesy Garlic Bread (5 piece):  $5.50  (2 piece):$3.50
Roasted Garlic Marinera:  $1.00
add dip for $.25
 
Cookies:  $1.50
          </Text>
          <Button
            title="HOME"
            onPress={this.onButtonPressHome}
          />
        
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
  },
  header:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    marginRight: 18,
    marginTop: 18
  },
  info:{

  }
});

export default Sandwiches;