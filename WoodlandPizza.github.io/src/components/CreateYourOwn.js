import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class CreateYourOwn extends React.Component {

  static navigationOptions = {
    title: 'Create Your Own Pizza'
  }
 
  onButtonPressHome = () => {
    this.props.navigation.navigate('home');
  }


  render() {


    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View 
          className="App-header" 
          >
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }}
            onPress={this.onButtonPressHome}/>
        </View >
        <View style={styles.container}>
<Text style={styles.name}>

</Text>
<Text>

</Text>
        <Text style={styles.header}>
Create Your Own
</Text>
<Text>
made with traditional red sauce and 3 cheese blend unless specified
</Text>
<Text>
Feel free to order 1/2 sauces and/or 1/2 toppings...equal substitutions are okay too!
</Text>
<Text style={styles.name}>
12” Med or 10" Gluten Free - 14” Lrg - 16” Family
</Text>
<Text style={styles.name}>
Cheese - 10.00   11.50   13.00
</Text>
<Text style={styles.name}>
Additional Toppings - 1.50   2.00   2.50
</Text>
<Text style={styles.name}>
1/2 Toppings - 0.75   1.00   1.25
</Text>
<Text style={styles.name}>
Select your Crust
</Text> 
<Text>
Traditional Hand-Tossed, Thin Crust, Gluten Free (medium only add $2.00)
</Text>
<Text style={styles.name}>
Sauce
</Text>
<Text>
Traditional Red, 
Creamy White Garlic, 
Alfredo, 
Olive Oil & Spice Blend, 
Spicy Buffalo, 
Bar-B-Que, 
Taco, 
Tzatziki (Creamy Cucumber)
</Text>
<Text style={styles.name}>
Cheese:
</Text>
<Text>
3 Cheese Blend, 
Cheddar, 
Pepperjack, 
Romano, 
Asiago, 
Feta, 
Gorgonzola, 
Cream Cheese, 
X-tra 3 Cheese Blend
</Text>
<Text style={styles.name}>
Toppings
</Text>
<Text style={styles.name}>
Meat:
</Text>
<Text>
  Pepperoni, 
Italian Sausage, 
Cajun Andouille Sausage, 
Ground Beef, 
Seasoned Taco Beef, 
Garlic Chicken, 
Ranch Chicken, 
Buffalo Chicken, 
BBQ Chicken, 
Shrimp, 
Crispy Bacon, 
Jalapeño Bacon, 
Canadian Bacon
  </Text>
  <Text style={styles.name}>
Veggies:
</Text>  
<Text>
  Roma Tomatoes, 
Sun Dried Tomatoes, 
Mushrooms, 
Onion Medley, 
Red Onions, 
Green Onions, 
Yellow Onions, 
Roasted Onions & Peppers, 
Green Peppers, 
Banana Pepper Rings, 
Jalapeño Peppers, 
Green Olives, 
Black Olives, 
Kalamata Olives, 
Fresh Spinach, 
Artichoke Hearts, 
Broccoli, 
Celery, 
Sauerkraut, 
Pineapple, 
Sliced Dill Pickles, 
Minced Garlic, 
Fresh Rosemary
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

export default CreateYourOwn;