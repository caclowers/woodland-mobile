import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Traditional extends React.Component {

  static navigationOptions = {
    title: 'Traditional Pizzas'
  }



  // onButtonPressGourmet = () => {
  //   this.props.navigation.navigate('sandwiches');
  // }
  // onButtonPressCYO = () => {
  //   this.props.navigation.navigate('reviews');
  // }
 
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
            Traditional Pizzas
          </Text>
          <Text>
            All of our traditional pizzas start with a 3 Cheese Blend
            & Red Sauce (unless noted with an *)
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
            12” Medium      14” Large   16” Family Size
          </Text> 
          <Text style={styles.name}>
            The Woodland - 15.00   18.00   21.00
          </Text>
          <Text>
            Pepperoni, Italian Sausage, Canadian Bacon, Onion Medley, Green Peppers, Mushrooms, Green & Black Olives
          </Text>
          <Text style={styles.name}>
            The Mighty Oak - 14.00   17.00   20.00
          </Text>
          <Text>
            Pepperoni, Sausage, Onion Medley, Green Peppers, Mushrooms
          </Text>
          <Text style={styles.name}>
            The Grizzly Bear - 14.00   17.00   20.00
          </Text>
          <Text>
            Pepperoni, Italian Sausage, Canadian Bacon, Ground Beef, Crispy Bacon
          </Text>
          <Text style={styles.name}>
            The Kodiak - 16.00   19.00   22.00
          </Text>
          <Text>
            King of the Grizzly Bears! Pepperoni, Sausage, Canadian Bacon, Ground Beef, Crispy Bacon, Onion Medley, Mushrooms, & Jalapeño Peppers for extra bite!
          </Text>
          <Text style={styles.name}>
            The Garden - 14.00   17.00   20.00
          </Text>
          <Text>
            Roma Tomatoes, Mushrooms, Green Peppers, Black Olives, Onion Medley
          </Text>
          <Text style={styles.name}>
            The Sunset - 14.00   17.00   20.00
          </Text>
          <Text>
            Crispy Bacon, Italian Sausage, Roma Tomatoes, Green Peppers, Onion Medley, Cheddar Cheese
          </Text>
          <Text style={styles.name}>
            The Forest Fire - 14.00   17.00   20.00
          </Text>
          <Text>
            Buffalo Chicken, Jalepeno Bacon, Italian Sausage
          </Text>
          <Text style={styles.name}>
            The Up Nort' - 14.00   17.00   20.00
          </Text>
          <Text>
            Ground Beef, Crispy Bacon, Yellow Onions, Sliced Dill Pickles, Cheddar Cheese
          </Text>
          <Text style={styles.name}>
            The OctoberFest - 14.00   17.00   20.00
          </Text>
          <Text>
            Pepperoni, Canadian Bacon, Crispy Bacon, Sauerkraut, Yellow Onions
          </Text>
          <Text style={styles.name}>
            *The Brotherly Love - 14.00   17.00   20.00
          </Text>
          <Text>
            A Philly Steak Treat! *Alfredo sauce, Steak, Onion Medley, Green Peppers, Pepperjack Cheese, and Special Seasoning to give it that extra zip!
          </Text>
          <Text style={styles.name}>
            *The Wild Buffalo - 14.00   17.00   20.00
          </Text>
          <Text>
            *Spicy Buffalo Sauce, Buffalo Chicken, Bleu Cheese, Celery
          </Text>
          <Text style={styles.name}>
            *The Lumberjack - 16.00   19.00   22.00
          </Text>
          <Text>
            *BBQ Sauce, BBQ Chicken, Cripsy Bacon, Roma Tomatoes, Banana Pepper Rings, Red Onions, Pineapple
          </Text>
          <Text style={styles.name}>
            *The Jackpine Savage - 15.00   18.00   21.00
          </Text>
          <Text>
            *Alfredo Sauce, Garlic Chicken, Jalapeño Bacon, Roasted Onions & Peppers, Pepperjack Cheese
          </Text>
          <Text style={styles.name}>
            *The Feisty Burro - 15.00   18.00   21.00
          </Text>
          <Text>
            *Taco Sauce, Seasoned Taco Beef, Roma Tomatoes, Yellow Onions, Black Olives, Cheddar Cheese (Jalapeños can be added an an additional topping for a little extra zing!)
          </Text>
          <Text style={styles.name}>
            *The Barn Burner - 14.00   17.00   20.00
          </Text>
          <Text>
            *Spicy Buffalo Sauce, Buffalo Chicken, Jalapeño Bacon, Banana Pepper Rings, Jalapeño Peppers, Pepperjack Cheese
          </Text>
        </View>
        
          

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

export default Traditional;