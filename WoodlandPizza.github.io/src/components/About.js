import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button';
import logo from '../../woodland_logos_cropped.jpg';



class About extends React.Component {
 
  static navigationOptions = {
    title: 'ABOUT'
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
            Hours Of Operation:
          </Text> 
          <Text>
            Monday.................Closed
          </Text>
          <Text>
            Tuesday...............11:00am ‐ 9:00pm
          </Text> 
          <Text>
            Wednesday..........11:00am ‐ 9:00pm 
          </Text>
          <Text>
            Thursday..............11:00am ‐ 9:00pm 
          </Text>
          <Text>
            Friday....................11:00am ‐ 9:00pm 
          </Text>
          <Text>
            Saturday...............11:00am ‐ 9:00pm
          </Text> 
          <Text>
            Sunday...................11:00am ‐ 9:00pm
          </Text>
  

          <Text style={styles.name}>
            Payment Methods:
          </Text>
          <Text>
            Cash, Check, Visa, Discover, MasterCard, American Express, and EBT 
          </Text>

          <Text style={styles.name}>
            Our Store:
          </Text>
          <Text>
            In our wheelhouse is our hand created Gourmet Specialty “Take‐N‐Bake” pizzas!!! or you may custom design a made to order pizza and we will hand craft it just for you!!!
          </Text> 

          <Text>
            With Personal size‐pizzas we oﬀer an "Dine‐in" or “Cooked to‐go” and a “Take‐N‐Bake” option (made to your order) Also a selection of specialty sandwiches, and salads.
          </Text>

          <Text style={styles.name}>
            Ordering‐In Store pickup:
          </Text> 
          <Text>
            Store location currently oﬀers "Pick‐Up at counter" call ahead, walk‐in service or online Call‐in: 952‐447‐9663
          </Text> 

          <Text style={styles.name}>
            Walk‐in:
          </Text>   
          <Text>
            5745 Egan Drive (County Road 42), Savage, Minnesota 55378 
          </Text>

          <Text style={styles.name}>
            Online ordering:
          </Text> 
          <Text>
            Slice — https://slicelife.com 
          </Text> 

          <Text style={styles.name}>
            Ordering Delivery:
          </Text>
          <Text>
            For delivery service:   
          </Text>
          <Text>
            Bite Squad — www.bitesquad.com 
          </Text>
          <Text>
            Door Dash — www.doordash.com
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

export default About;