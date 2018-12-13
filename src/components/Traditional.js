import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Traditional extends React.Component {

  static navigationOptions = {
    title: 'Traditional Pizzas'
  }



  onButtonPressGourmet = () => {
    this.props.navigation.navigate('sandwiches');
  }
  onButtonPressCYO = () => {
    this.props.navigation.navigate('reviews');
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
  Traditional PizzasAll of our traditional pizzas start with a Red Sauce (unless noted with an *) & 3 Cheese Blend!
Thin Crust is available upon request for all sizes                 
  12” Medium      14” Large   16” Family Size
The Woodland                    15.00           18.00          21.00
Pepperoni, Italian Sausage, Canadian Bacon, Onion Medley, Green Peppers, Mushrooms, Green & Black Olives
The Mighty Oak                  14.00           17.00          20.00
Pepperoni, Sausage, Onion Medley, Green Peppers, Mushrooms
The Grizzly Bear                 14.00           17.00          20.00
Pepperoni, Italian Sausage, Canadian Bacon, Ground Beef, Crispy Bacon,
The Kodiak                       16.00           19.00          22.00
King of the Grizzly Bears! Pepperoni, Sausage, Canadian Bacon, Ground Beef, Crispy Bacon, Onion Medley, Mushrooms, & Jalepeno Peppers for extra bite!
The Garden       14.00           17.00          20.00
Roma Tomatoes, Mushrooms, Green Peppers, Black Olives, Onion Medley
The Sunset  14.00           17.00          20.00
Crispy Bacon, Italian Sausage, Roma Tomatoes, Green Peppers, Onion Medley, Cheddar Cheese
The Forest Fire  14.00           17.00          20.00
Buffalo Chicken, Jalepeno Bacon, Italian Sausage
The Up Nort'    14.00           17.00          20.00
Ground Beef, Crispy Bacon, Yellow Onions, Sliced Dill Pickles, Cheddar Cheese
The OctoberFest      14.00           17.00          20.00
Pepperoni, Canadian Bacon, Crispy Bacon, Sauerkraut, Yellow Onions
The Brotherly Love              14.00           17.00          20.00
A Philly Steak Treat! *Alfredo sauce, Steak, Onion Medley, Green Peppers, Pepperjack Cheese, and Special Seasoning to give it that extra zip!
The Wild Buffalo      14.00           17.00          20.00
*Spicy Buffalo Sauce, Buffalo Chicken, Bleu Cheese, Celery
The Lumberjack   16.00           19.00          22.00
*BBQ Sauce, BBQ Chicken, Cripsy Bacon, Roma Tomatoes, Banana Pepper Rings, Red Onions, Pineapple
The Jackpine Savage  15.00           18.00          21.00
*Alfredo Sauce, Garlic Chicken, Jalepeno Bacon, Roasted Onions & Peppers, Pepperjack Cheese
The Feisty Burro      15.00           18.00          21.00
*Taco Sauce, Seasoned Taco Beef, Roma Tomatoes, Yellow Onions, Black Olives, Cheddar Cheese (Jalepenos can be added an an additional topping for a little extra zing!)
The Barn Burner 14.00           17.00          20.00
*Spicy Buffalo Sauce, Buffalo Chicken, Jalepeno Bacon, Banana Pepper Rings, Jalepeno Peppers, Pepperjack Cheese
          
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

export default Traditional;