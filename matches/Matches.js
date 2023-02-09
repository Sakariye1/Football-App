import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { Text, Card } from '@rneui/themed';

export default function Matches({ navigation }) {



    return (
        <View style={styles.container}>
        
        
        <Card style={styles.buttoncontainer}>

        <Card.Title>Competitions</Card.Title>
        
    <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('PREMIER LEAGUE' )}  
        >
        <Image
            source={require( '../images/PL.png')}
          
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Premier League</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('PRIMERA DIVISIÓN' )}  
        >
        <Image
            source={require( '../images/PD.png')}
          
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>La Liga</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('SERIE A' )}  
        >
        <Image
            source={require( '../images/SA.png')}
          
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Serie A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('BUNDESLIGA' )}  
        >
        <Image
            source={require( '../images/BL.png')}
          
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>Bundesliga</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      </Card>
      
      </View>  
      
      );
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  containerStyle:{
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  
  buttoncontainer: {
      flex: 1,
      width: 170,
      flexDirection: 'column',
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e35a05',
    borderWidth: 0.5,
    borderColor: '#ffffff',
    height: 45,
    borderRadius: 5,
    margin: 5,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 50,
    resizeMode: 'center',
  },
  buttonTextStyle: {
    color: '#000000',
    marginBottom: 4,
    marginLeft: 10,
    fontWeight: "bold" ,
    
    
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});