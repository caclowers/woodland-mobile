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
        <View className="App-header" >
          <Image
            source={logo}
            className="App-logo"
            alt="logo"
            style={{ width: 193, height: 161 }} />
        </View >
          
        <View style={styles.container}>
          <Text style={styles.name}>
            Facebook - "1570 Likes" and counting...
          </Text>

          <Text style={styles.name}>
            - Daren, April
          </Text>
          <Text>
            "Our 1st visit. The take and bake was great...fresh ingredients...massive toppings list...excellent crust...$ good value" 
          </Text>

          <Text style={styles.name}>
            -Larry, March
          </Text>
          <Text>
            "Best Take N' Bake pizza, by far!!" 
          </Text> 

          <Text style={styles.name}>
            - Lauren, December
          </Text> 
          <Text>
            "We love Woodland pizza! It's the only pizza I'll eat in the area. The service is always fantastic and we love the wide menu selection!"
          </Text> 

          <Text style={styles.name}>
            - Dan, December
          </Text>
          <Text>
            "Awesome mashed potato pizza with an incredibly nice owner!!!"
          </Text> 

          <Text style={styles.name}>
            - Kaleena, August
          </Text>
          <Text>
            "Just had Woodland Pizza for the first time tonight, and it was excellent! You guys are my new goto pizza joint. I could have eaten an entire Avalanche all by myself! Great pizza, even better prizes, and outstanding service! You guys rock!"
          </Text> 

          <Text style={styles.name}>
            - Brian, July
          </Text>
          <Text>
            "Woodland Take N Bake Pizza Company has the best Pizza in MN and today for lunch I am excited to try a new line of sandwiches they just started to offer!!! Very excited!!!"
          </Text>
                    

          <Text style={styles.name}>
            - Kevin, August
          </Text>
          <Text>
            "If you have never tried pizza from woodlands your missing out.. I had never been before myself....,,, Ordered an avalanche and spartan tonight, both exceeded expectations by far!!! Simply amazing!  I will definitely order again can't wait to try some other recipes. Also, extremely fair pricing -especially for how good the food is ... Put the frozen pizzas down and go to Woodland pizza!"
          </Text> 

          <Text style={styles.name}>
            - Mike
          </Text>
          <Text>
            "The "Avalanche" was awesome!! Thanks Jared!!"
          </Text> 

          <Text style={styles.name}>
            - Nancy
          </Text>
          <Text>
            "Best Pizza Ever"
          </Text>

          <Text style={styles.name}>
            - Wendy, February '12 
          </Text>
          <Text>
            "I'm a new fan.  Just tried the mashed potato pizza last night and it was delicious!  Such a unique combo of flavors-all on top of a pizza.  I'll be back."
          </Text> 

          <Text style={styles.header}>
            Comments About Expansion plans
          </Text>
          <Text style={styles.name}>
          Jan '12 from Sara
          </Text> 
          <Text>
            "Like x100. This is exciting for Woodland and it's customers!"
          </Text>

          <Text style={styles.name}>
            Jan '12 from Shawn
          </Text>
          <Text>
            "Way to go Jared! Best pizza in Mn"
          </Text>

          <Text style={styles.name}>
            Jan '12 from Raul
          </Text>
          <Text>
            "I will never eat pizza from somewhere else. Woodland is the best pizza ever!"
          </Text>

          <Text style={styles.name}>
            Jan '12 from Randy
          </Text>
          <Text>
            "Best damn pizza around - great job Jarod!"
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

export default Reviews;