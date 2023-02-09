import React, { Component } from'react';
import { Image, Dimensions, StyleSheet, ActivityIndicator, FlatList, Text, View, Button } from 'react-native'; 
import { Card } from 'react-native-elements';

    
    

export default class PPLmatches extends Component{
  constructor(props) { 

    super(props); 
    this.state = { 

      data: [], 

      isLoading: true ,
    }; 
  } 

  componentDidMount() { 

    fetch("http://api.football-data.org/v2/competitions/PD/matches", { 

      headers: { 

        "X-Auth-Token": "Add Token", 

      }, 

      method: "GET" 

    }) 

      .then((response) => response.json()) 

      .then((json) => { 

        this.setState({ data: json.matches }); 

      }) 

      .catch((error) => console.error(error)) 

      .finally(() => { 

        this.setState({ isLoading: false }); 

      }); 

  } 

  render() { 

    const { data, isLoading,  } = this.state; 

    return ( 

      <View style={styles.container}> 

        <View style={styles.tableHeader}> 

          <Text style={{ 

            backgroundColor: "#e35a05", color: "#000000", flex: 3, 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>Fixtures</Text> 

        </View> 

        {isLoading ? <ActivityIndicator /> : ( 

          <FlatList 

            data={data} 

            keyExtractor={({ id }, index) => id} 

            renderItem={({ item }) => ( 

              <View style={{ backgroundColor: '#ffffff',}}> 
              <Card>
                <Card.Title style={styles.Card}>{item.utcDate}</Card.Title>
                <Card.Divider />
                <View style={styles.table} key={item.id}> 

                  <Text style={styles.team}>{item.homeTeam.name}  </Text> 

                  <Text style={styles.goals}>{item.score.fullTime.homeTeam} - {item.score.fullTime.awayTeam}</Text> 

                  <Text style={styles.team}>{item.awayTeam.name}</Text> 
    
                </View> 
              </Card>
                
              </View> 
            )} 
          /> 
        )} 
      </View> 
          ); 
          } 
        }; 



const styles = StyleSheet.create({ 

  container: { 

    backgroundColor: "#303030", 

    flex: 1, 

  }, 
  buttoncontainer: {
    flex: 1,
    width: 170,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
},

  tableHeader: { 

    backgroundColor: "#ffffff", 

    flexDirection: "row", 

    marginTop: 28, 

    justifyContent: "center", 

    alignItems: "center", 

    height: 40 

  }, 

  table: { 

    flexDirection: "row", 

    justifyContent: "center", 
    alignItems: "center", 

    height: 45, 

    marginRight: 10 

  }, 

  Card: { 

    flex: 2, 
    flexDirection: 'column', 
    alignItems: "center", 
    color: "#000000", 
    backgroundColor: '#ffffff',
    paddingVertical: 1, 

    padding: 15,
    
    fontSize: 16
  }, 

  team: { 

    flex: 3, 

    color: "#e07d04", 
    
    paddingVertical: 3, 

    padding: 3

  }, 
  goals: { 

    flex: 2, 

    color: "green", 
    
    paddingVertical: 3, 

    textAlign: "center", 
    padding: 1
  }, 
 
}); 