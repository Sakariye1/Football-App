import React, { Component } from'react';
import { Dimensions, StyleSheet, ActivityIndicator, FlatList, View} from 'react-native'; 
import { Text } from '@rneui/themed';
    
    
    

export default class PLstats extends Component{
  constructor(props) { 

    super(props); 

    this.state = { 

      data: [], 

      isLoading: true ,

    }; 

  } 

  componentDidMount() { 

    fetch("http://api.football-data.org/v2/competitions/SA/scorers", { 

      headers: { 

        "X-Auth-Token": "Add Token", 

      }, 

      method: "GET" 

    }) 

      .then((response) => response.json()) 

      .then((json) => { 

        this.setState({ data: json.scorers }); 

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

        <Text style={{ 

          color: "#f2a365", 

          textAlign: "center", 

        }}> Top goal scorers</Text>

        <View style={styles.tableHeader}> 

          <Text style={{ 

            color: "#000000", 
            
            flex: 3, 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>Player</Text> 

          <Text style={{ 

            color: "#000000", 
            
            flex: 5, 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>Team</Text> 

          <Text style={{ 

            color: "#000000", 
            
            flex: 2, 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>Goals</Text> 

        </View> 

        {isLoading ? <ActivityIndicator /> : ( 

          <FlatList 

            data={data} 

            keyExtractor={({ id }, index) => id} 

            renderItem={({ item }) => ( 

              <View> 

                <View style={styles.table} key={item.id}> 

                 <Text style={styles.name}>{item.player.name}</Text>

                  <Text style={styles.team}>{item.team.name}  </Text> 

                  <Text style={styles.goals}>{item.numberOfGoals}</Text> 

                </View> 

                <View style={{ height: 1, backgroundColor: "#ffffff" }}></View> 

              </View> 

            )} 

          /> 

        )} 

      </View> 

    ); 

  } 

}; 

const windowWidth = Dimensions.get('window').width / 18; 

const windowHeight = Dimensions.get('window').height; 

const styles = StyleSheet.create({ 

  container: { 

    backgroundColor: "#303030", 

    flex: 1, 

  }, 

  tableHeader: { 

    backgroundColor: "#b0aeae", 

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

    height: 50, 

    marginRight: 10 

  }, 

  name: { 

    flex: 4, 
    flexDirection: 'column',
    color: "#ececec", 
    paddingVertical: 3, 
    padding: 10,
  }, 

  team: { 

    flex: 5, 

    color: "#ececec", 

    paddingVertical: 3, 

    padding: 10,

  }, 

  goals: { 

    flex: 1, 

    color: "#f2a365", 

    paddingVertical: 3, 

    textAlign: "center", 
    padding: 1,

  }, 
 
}); 