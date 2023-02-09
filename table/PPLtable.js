import React, { Component } from'react';
import { Image, Dimensions, StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native'; 


    
    

export default class PPLtable extends Component{
 constructor(props) { 

    super(props); 

    this.state = { 

      data: [], 

      isLoading: true 

    }; 

  } 

  componentDidMount() { 

    fetch("http://api.football-data.org/v2/competitions/BL1/standings", { 

      headers: { 

        "X-Auth-Token": "Add Token", 

      }, 

      method: "GET" 

    }) 

      .then((response) => response.json()) 

      .then((json) => { 

        this.setState({ data: json.standings[0].table }); 

      }) 

      .catch((error) => console.error(error)) 

      .finally(() => { 

        this.setState({ isLoading: false }); 

      }); 

  } 

  render() { 

    const { data, isLoading } = this.state; 

    return ( 

      <View style={styles.container}> 

        <View style={styles.tableHeader}> 

          <Text style={{ 

            flex: 2, 

            color: "#202021", 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>Pos</Text> 

          <Text style={{ 

            flex: 9, 

            color: "#202021", 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>Club</Text> 

          <Text style={{ 

            flex: 1, 

            color: "#202021", 

            paddingVertical: 3, 

            textAlign: "center", 
          
          }}>P</Text> 

          <Text style={{ 

            flex: 1, 

            color: "#202021", 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>W</Text> 

          <Text style={{ 

            flex: 1, 

            color: "#202021",  

            paddingVertical: 3, 

            textAlign: "center",
            
          }}>D</Text> 

          <Text style={{ 

            flex: 1, 

            color: "#202021", 

            paddingVertical: 3, 

            textAlign: "center", 

          }}>L</Text> 


          <Text style={{ 

            flex: 1, 

            color: "#202021", 

            paddingVertical: 3, 

            textAlign: "center", 

            

          }}>GD</Text> 
          <Text style={{ 

            flex: 1.5, 

            color: "#202021",  

            paddingVertical: 3, 

            textAlign: "center", 

          }}>PTS</Text> 

        </View> 
        {isLoading ? <ActivityIndicator /> : ( 

          <FlatList 

            data={data} 

            keyExtractor={({ id }, index) => id} 

            renderItem={({ item }) => ( 

              <View> 

                <View style={styles.table}> 

                  <Text style={styles.pos}>{item.position}</Text> 

                  <Text style={styles.team}> 

                  {<Image 

                    source={{ uri: item.team.crestUrl }} 

                  style={{width: 15, height: 15} } /> 

                   } 

                       {item.team.name} </Text> 

                  <Text style={styles.pg}>{item.playedGames}</Text> 

                  <Text style={styles.won}>{item.won}</Text> 

                  <Text style={styles.draw}>{item.draw}</Text> 

                  <Text style={styles.lost}>{item.lost}</Text> 

                  

                  <Text style={styles.gd}>{item.goalDifference}</Text>

                  <Text style={styles.points}>{item.points}</Text> 

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

    height: 35, 

    marginRight: 10 

  }, 

  pos: { 

    flex: 1.3, 

    color: "#ececec", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  team: { 

    flex: 9, 

    color: "#ececec", 

    paddingVertical: 3, 

  }, 

  pg: { 

    flex: 1, 

    color: "#ececec", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  won: { 

    flex: 1, 

    color: "green", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  draw: { 

    flex: 1, 

    color: "yellow", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  lost: { 

    flex: 1, 

    color: "red", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  gf: { 

    flex: 1.2, 

    color: "#ececec", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  ga: { 

    flex: 1.2, 

    color: "#ececec", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  gd: { 

    flex: 1, 

    color: "#a4f5f2", 

    paddingVertical: 3, 

    textAlign: "center", 

  }, 

  points: { 

    flex: 1, 

    color: "#f2a365", 

    paddingVertical: 3, 

    textAlign: "center", 

    fontWeight: "bold" 

  }, 

}); 