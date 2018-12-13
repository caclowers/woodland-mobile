import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class Reviews extends React.Component {
 
  static navigationOptions = {
    title: 'REVIEWS'
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
          Facebook - "1570 Likes" and counting...

          Our 1st visit. The take and bake was great...fresh ingredients...massive toppings list...excellent crust...$ good value  - Daren, April

          Best Take N' Bake pizza, by far!!  -Larry, March

          We love Woodland pizza! It's the only pizza I'll eat in the area. The service is always fantastic and we love the wide menu selection! - Lauren, December

          Awesome mashed potato pizza with an incredibly nice owner!!! - Dan-December

          Just had Woodland Pizza for the first time tonight, and it was excellent! You guys are my new goto pizza joint. I could have eaten an entire Avalanche all by myself! Great pizza, even better prizes, and outstanding service! You guys rock! Kaleena-August

          Woodland Take N Bake Pizza Company has the best Pizza in MN and today for lunch I am excited to try a new line of sandwiches they just started to offer!!! Very excited!!!
          Brian-July

          If you have never tried pizza from woodlands your missing out.. I had never been before myself....,,, Ordered an avalanche and spartan tonight, both exceeded expectations by far!!! Simply amazing!  I will definitely order again can't wait to try some other recipes. 
          Also, extremely fair pricing -especially for how good the food is ... Put the frozen pizzas down and go to Woodland pizza!  Kevin-August

          The "Avalanche" was awesome!! Thanks Jared!!, Mike

          Best Pizza Ever, Nancy

          I'm a new fan.  Just tried the mashed potato pizza last night and it was delicious!  Such a unique combo of flavors-all on top of a pizza.  I'll be back., Feb'12 from Wendy

          Facebook Comment About Expansion plans, Jan '12 from Sara
          "Like x100. This is exciting for Woodland and it's customers!"

          Facebook Comment About Expansion plans, Jan '12 from Shawn
          "Way to go Jared! Best pizza in Mn"

          Facebook, Jan '12 from Raul
          "I will never eat pizza from somewhere else. Woodland is the best pizza ever!"

          Facebook, Jan '12 from Randy
          "Best damn pizza around - great job Jarod!"
          </Text>
        <View>


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
  }
});

export default Reviews;