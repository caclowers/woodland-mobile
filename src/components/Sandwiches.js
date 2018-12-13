import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View className="App-header" >
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }} />
        </View >

<View style={styles.container}>
<Text style={styles.header}>
          Sandwiches:
          </Text>
        <Text>
          All come on a 7" ciabatta roll, multigrain, and (parmesan rosemary ciabatta coming soon!!)
          </Text>
        <Text style={styles.name}>
          The Grand Teton: $7.00
        </Text>
        <Text>
          white garlic sauce, grilled chicken, red onions, roma tomatoes, spinach and asiago cheese
        </Text>
        
        <Text style={styles.name}>
          The Jackpine Savage: $7.00
        </Text>
        <Text>
          alfredo sauce, grilled chicken, jalapeño bacon, roasted peppers and onions with pepperjack cheese
        </Text>

        <Text style={styles.name}>
          The Brotherly Love: $7.00
        </Text>
        <Text>
          alfredo sauce, seasoned steak, onion medley, green peppers and pepperjack cheese
        </Text>

        <Text style={styles.name}>
          The Voyagers:  $7.00
        </Text>
        <Text>
          white garlic sauce, onion medley, artichoke hearts, kalamata olives, spinach, roma tomatoes and feta cheese
        </Text>

        <Text style={styles.name}>
          The Classic Pizza: $7.00
        </Text>
        <Text>
          pizza sauce, pepperoni and sausage smothered with our 3-cheese blend
        </Text>

        <Text style={styles.name}>
          The Classic Meatball: $7.00
        </Text>
        <Text>
          3 of our italian meatballs cut in 1/2, smothered with our 3-cheese blend.  Comes with a cup of roasted garlic marinera sauce for dipping.
        </Text>

        <Text style={styles.name}>
          The Chicken Bacon: $7.00
        </Text>
        <Text>
          grilled chicken, crispy bacon, mayo, onion medley, american cheese, lettuce, roma tomatoes and creamy ranch dressing
        </Text>

        <Text style={styles.name}>
          The Classic Turkey:  $6.50
        </Text>
        <Text>
          roasted turkey, mayo, onion medley, american cheese, lettuce and roma tomatoes
        </Text>

        <Text style={styles.name}>
          The Classic BLT:  $6.00
        </Text>
        <Text>
          crispy bacon, mayo, lettuce, tomatoes and american cheese   add turkey for $1.00 extra
        </Text>

        <Text style={styles.name}>
          The Woodland Club:  $7.00
        </Text>
        <Text>
          roasted turkey, pepperoni, crispy bacon, mayo, lettuce, onion medley, roma tomatoes and american cheese
        </Text>

        <Text style={styles.name}>
          The Toasted PB & J:  $4.00
        </Text>
        <Text>
          peanut butter and jelly on a toasted bun
        </Text>

        <Text style={styles.name}>
          Gyros: $4.50 (2 for $7.00)
        </Text>
        <Text>
         gyro meat, tzatziki sauce, onion medley and roma tomatoes on a 6" pita 
        </Text> 
        
        <Text style={styles.name}>
          Extra Sandwich Toppings:
        </Text>
        <Text>
          Add extra meat to any sandwich for $1.00
        </Text> 
        <Text>
          Add extra cheese to any sandwich for $.50
        </Text> 
        <Text>
          Add unlimited vegi's free of charge.
        </Text>
        <Text>
          We allow substitutions, how you want it is how we make it.
        </Text>
        
        <Text style={styles.header}>
          Soup:
        </Text>
        <Text style={styles.name}>
          Soup of the day:
        </Text>  
        <Text>
          cup $3.50  bowl $4.50
        </Text>
        
        <Text style={styles.header}>
          Salads:
        </Text>
        <Text style={styles.name}>
          Build Your Own:
        </Text>  
        <Text>
          side $3.00  regular $3.00
        </Text>
        <Text>
          add meat $1.00  $1.50
        </Text>
        <Text>
          chicken, crispy bacon, pepperoni or canadian bacon
        </Text>
        <Text>
          add extra cheese $0.50  $1.00
        </Text>
        <Text>
          add 5 more veggies $0.50  $1.00
        </Text>
        <Text>
          green olives, green peppers, black olives, kalamata olives, craisins, sunflower seeds, onion medley, jalapeño peppers, banana pepper rings, mushrooms, pineapple, sundried tomatoes
        </Text>
        
        <Text style={styles.header}>
          Personal Pizzas:
        </Text>  
        <Text>
          Yes, we cook them!!!:
        </Text>
        <Text>
         Create your own personal pizza with any 3 of our pizza toppings for $5.00 
        </Text>
        <Text>
          Upgrade to a gourmet or traditional combo for $6.00
        </Text>
        <Text>
          additional toppings only $.50 each
        </Text>
        
        <Text style={styles.header}>
          Pizza By The Slice (11:00am-2:00pm)
        </Text>
        <Text>
          1 slice: $3.00
        </Text>
        <Text>
          2 slices + pop = $6.00
        </Text>
        
        
        <Text style={styles.header}>
          Appetizers:
        </Text>
        <Text style={styles.name}>
          Chips: $1.50
        </Text>
        <Text style={styles.name}>
          Garlic Bread (5 piece): $4.50  (2 piece): $2.50
        </Text>
        <Text style={styles.name}>
          Cheesy Garlic Bread (5 piece): $5.50  (2 piece):$3.50
        </Text>
        <Text style={styles.name}>
          Roasted Garlic Marinara:  $1.00
        </Text>
        <Text>
          add dip for $.25
        </Text>
        
        <Text style={styles.name}>
          Cookies:  $1.50
        </Text>
</View>
        

        <Button
          title="HOME"
          onPress={this.onButtonPressHome}
        />
        <View style={{ height: 72 }}></View>
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
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 14,
    textDecorationLine: 'underline'
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 14
  }
});

export default Sandwiches;