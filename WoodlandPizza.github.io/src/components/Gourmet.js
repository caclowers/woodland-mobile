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
        <View className="App-header">
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }} />
        </View >
        <View style={styles.container}>
          <Text style={styles.header}>
            Gourmet Pizzas
          </Text>

          <Text>
            All of our traditional pizzas start with our 3 Cheese
          </Text>
          <Text>
            Blend & our Creamy White Garlic Sauce
          </Text>
          <Text>
            (unless noted with an *)
          </Text>

          <Text>
            Thin Crust is available upon request for all sizes
          </Text>
          <Text style={styles.name}>
            Garlic ButterCups - 0.50 ea.
          </Text>
          <Text>
            Perfect for Dippin' the crust
          </Text>
          <Text style={styles.name}>
            12” Medium   14” Large   16” Family Size
          </Text>
          <Text style={styles.name}>
            The Yellowstone - 13.00   16.00   19.00
          </Text>
            <Text>
              Garlic Chicken, Minced Garlic, Fresh Rosemary, & Gorgonzola Cheese
            </Text>
          <Text style={styles.name}>
            The Everglades - 13.00   16.00   19.00
          </Text>
            <Text>
              Artichoke Hearts, Minced Garlic, Fresh Spinach, & Asiago Cheese
            </Text>
          <Text style={styles.name}>
            The Polar Bear  NEW *** - 15.00   18.00   21.00
          </Text>
            <Text>
              Pepperoni, Anduille Sausage, Jalepeno Bacon, Hot Banana Pepper Rings
            </Text>
          <Text style={styles.name}>
            *The Avalanche NEW *** - 14.00   17.00   20.00
          </Text>
            <Text>
              *Creamy Garlic Butter Sauce, Mashed Potatoes, Crispsy Bacon, Chives, Topped With Cheddar Cheese
            </Text>
          <Text style={styles.name}>
            The Grand Teton - 15.00   18.00   21.00
          </Text>
            <Text>
              Garlic Chicken, Red Onions, Fresh Spinach, Minced Garlic, Roma Tomatoes, Fresh Rosemary, & Asiago Cheese
            </Text>
          <Text style={styles.name}>
            The Voyageurs - 15.00   18.00   21.00
          </Text>
            <Text>
              Artichoke Hearts, Minced Garlic, Fresh Spinach, Onion Medley, Kalamata Olives, Roma Tomatoes& Feta Cheese
            </Text>
          <Text style={styles.name}>
            The Isle Royale - 15.00   18.00   21.00
          </Text>
            <Text>
              Artichoke Hearts, Black Olives, Mushrooms, Green Peppers, Onion Medley, & Roma Tomatoes
            </Text>
          <Text style={styles.name}>
            The Great Smokey Mountain - 13.00   16.00   19.00
          </Text>
            <Text>
              Crispy Bacon, Fresh Spinach, & Roma Tomatoes
            </Text>
          <Text style={styles.name}>
            The Denali - 13.00   16.00   19.00
          </Text>
            <Text>
              Garlic Chicken, Red Onions, & Gorgonzola Cheese
            </Text>
          <Text style={styles.name}>
            The Yosemite - 14.00   17.00   20.00
          </Text>
            <Text>
              Artichoke Hearts, Sun Dried Tomatoes, Onion Medley, & Kalamata Olives
            </Text>
          <Text style={styles.name}>
            *The Acropolis - 15.00   18.00   21.00
          </Text>
            <Text>
              A Mediteranian Delight! *Olive Oil and Spice Blend Sauce, Garlic Chicken, Roma Tomatoes, Kalmata Olives, Minced Garlic, Red Onions, & Feta Cheese
            </Text>
          <Text style={styles.name}>
            *The Mt. Olympus NEW *** - 16.00   19.00   22.00
          </Text>
            <Text>
              For Those Who Love Gyros! *Tzatziki sauce, Gyro Meat, Onion Medley, Roma Tomatoes, Kalamata Olives, Topped with a mix of Feta and Asiago Cheeses
            </Text>
          <Text style={styles.name}>
            *The Spartan NEW *** - 15.00   18.00   21.00
          </Text>
            <Text>
              *Olive Oil and Spice Blend Sauce, Pepperoni, Crispy Bacon, Artichoke Hearts, Spinach,  and Asiago Cheese
            </Text>

          <Button
            title="HOME"
            onPress={this.onButtonPressHome}
          />
          <View style={{ height: 72 }}></View>
        </View>
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
    width: '90%'
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

export default Gourmet;