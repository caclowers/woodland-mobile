import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Gourmet extends React.Component {

  static navigationOptions = {
    title: 'Gourmet Pizzas'
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
        <Text>
        Gourmet PizzasAll of our gourmet pizzas start with our Creamy White Garlic Sauce (unless noted with an *) 
  & our 3 Cheese Blend!
Thin Crust is available upon request for all sizes                 
  12” Medium      14” Large   16” Family Size
The Yellowstone                  13.00           16.00          19.00
Garlic Chicken, Minced Garlic, Fresh Rosemary, & Gorgonzola Cheese
The Everglades                   13.00           16.00          19.00
Artichoke Hearts, Minced Garlic, Fresh Spinach, & Asiago Cheese
The Polar Bear  NEW ***                    15.00           18.00          21.00
Pepperoni, Anduille Sausage, Jalepeno Bacon, Hot Banana Pepper Rings
The Avalanche NEW ***         14.00           17.00          20.00
Creamy Garlic Butter Sauce, Mashed Potatoes, Crispsy Bacon, Chives, Topped With Cheddar Cheese
The Grand Teton                 15.00           18.00          21.00
Garlic Chicken, Red Onions, Fresh Spinach, Minced Garlic, Roma Tomatoes, Fresh Rosemary, & Asiago Cheese
The Voyageurs                    15.00           18.00          21.00
Artichoke Hearts, Minced Garlic, Fresh Spinach, Onion Medley, Kalamata Olives, Roma Tomatoes& Feta Cheese
The Isle Royale                   15.00           18.00          21.00
Artichoke Hearts, Black Olives, Mushrooms, Green Peppers, Onion Medley, & Roma Tomatoes
The Great Smokey Mountain                     13.00           16.00          19.00
Crispy Bacon, Fresh Spinach, & Roma Tomatoes
The Denali                         13.00           16.00          19.00
Garlic Chicken, Red Onions, & Gorgonzola Cheese
The Yosemite                      14.00           17.00          20.00
Artichoke Hearts, Sun Dried Tomatoes, Onion Medley, & Kalamata Olives
The Acropolis                     15.00           18.00          21.00
A Mediteranian Delight! *Olive Oil and Spice Blend Sauce, Garlic Chicken, Roma Tomatoes, Kalmata Olives, Minced Garlic, Red Onions, & Feta Cheese
The Mt. Olympus NEW ***                 16.00           19.00          22.00
For Those Who Love Gyros! *Tzatziki sauce, Gyro Meat, Onion Medley, Roma Tomatoes, Kalamata Olives, Topped with a mix of Feta and Asiago Cheeses
The Spartan NEW ***                 15.00           18.00          21.00
*Olive Oil and Spice Blend Sauce, Pepperoni, Crispy Bacon, Artichoke Hearts, Spinach,  and Asiago Cheese
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
  }
});

export default Gourmet;