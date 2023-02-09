import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Standings from './table/Standings';
import PLtable from './table/PLtable';
import PPLtable from './table/PPLtable';
import PDtable from './table/PDtable';
import SAtable from './table/SAtable';
import Stats from './Stats/Stats';
import PPLstats from './Stats/PPLstats';
import PLstats from './Stats/PLstats';
import PDstats from './Stats/PDstats';
import SAstats from './Stats/SAstats';
import Matches from './matches/Matches';
import PPLmatches from './matches/PPLmatches';
import PLmatches from './matches/PLmatches';
import PDmatches from './matches/PDmatches';
import SAmatches from './matches/SAmatches';
import { Icon } from '@rneui/base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LeagueStackNavigator = () =>{
  return (
    
      <Stack.Navigator>
        <Stack.Screen 
          name="Standings" 
          component={Standings} 
          options={{
          headerStyle: { backgroundColor: '#e35a05',
          }, headerTitle: "Leagues"
          }} 
          />
        <Stack.Screen name="PLtable"
           component={PLtable} 
           options={{
            headerStyle: { backgroundColor: '#e35a05',
            }, headerTitle: "PREMIER LEAGUE"
            }} 
            />
           
        <Stack.Screen name="PPLtable" 
            component={PPLtable} 
            options={{
            headerStyle: { backgroundColor: '#e35a05',
          }, headerTitle: "BUNDESLIGA"
          }} 
        />
         <Stack.Screen name="SAtable" 
            component={SAtable} 
            options={{
            headerStyle: { backgroundColor: '#e35a05',
          }, headerTitle: "SERIE A"
          }} 
        />
         <Stack.Screen name="PDtable" 
            component={PDtable} 
            options={{
            headerStyle: { backgroundColor: '#e35a05',
          }, headerTitle: "PRIMERA DIVISIÓN"
          }} 
        />
      </Stack.Navigator>
  
  );
  }

  const StatsStackNavigator = () =>{
    return (
      
        <Stack.Navigator>
          <Stack.Screen name="Leagues" 
            component={Stats}
            options={{
            headerStyle: { backgroundColor: '#e35a05',
            }, headerTitle: "Stats"
            }}  
          />
          <Stack.Screen name="Premier League" 
            component={PLstats}
            options={{
            headerStyle: { backgroundColor: '#e35a05',
            }, headerTitle: "PREMIER LEAGUE"
            }} 
          />
          <Stack.Screen name="Bundesliga"
             component={PPLstats} 
             options={{
              headerStyle: { backgroundColor: '#e35a05',
              }, headerTitle: "BUNDESLIGA"
              }} 
          />
          <Stack.Screen name="Serie A"
             component={SAstats} 
             options={{
              headerStyle: { backgroundColor: '#e35a05',
              }, headerTitle: "SERIE A"
              }} 
          />
          <Stack.Screen name="Primera Division"
             component={PDstats} 
             options={{
              headerStyle: { backgroundColor: '#e35a05',
              }, headerTitle: "PRIMERA DIVISIÓN"
              }} 
          />
        </Stack.Navigator>
    
    );
    }

    const MatchStackNavigator = () =>{
      return (
        
          <Stack.Navigator>
            <Stack.Screen name="Leagues" 
              component={Matches} 
              options={{
              headerStyle: { backgroundColor: '#e35a05',
              }, headerTitle: "Matches"
              }} 
              />
            <Stack.Screen name="PREMIER LEAGUE" 
              component={PLmatches} 
              options={{
                headerStyle: { backgroundColor: '#e35a05',
                }, headerTitle: "PREMIER LEAGUE"
                }} 
            />
            <Stack.Screen name="BUNDESLIGA" 
              component={PPLmatches}
              options={{
                headerStyle: { 
                  backgroundColor: '#e35a05',
                  
                }, headerTitle: "BUNDESLIGA"
                }} 
            />
            <Stack.Screen name="SERIE A" 
              component={SAmatches}
              options={{
                headerStyle: { 
                  backgroundColor: '#e35a05',
                  
                }, headerTitle: "SERIE A"
                }} 
            />
            <Stack.Screen name="PRIMERA DIVISIÓN" 
              component={PDmatches}
              options={{
                headerStyle: { 
                  backgroundColor: '#e35a05',
                  
                }, headerTitle: "PRIMERA DIVISIÓN"
                }} 
            />
          </Stack.Navigator>
      
      );
      }
  
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'rgb(116, 144, 147)',
        }}
      >
        <Tab.Screen
          name="Table"
          component={LeagueStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='ios-trophy'
              type='ionicon'
              color='#e35a05' />
            )
          }}
        />
         <Tab.Screen
          name="Stats"
          component={StatsStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='ios-medal'
              type='ionicon'
              color='#e35a05' />
            )
          }}
        />
        <Tab.Screen
          name="Matches"
          component={MatchStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name='ios-football'
              type='ionicon'
              color='#e35a05' />
            )
          }}
        />
 
      </Tab.Navigator>
    );
  };



export default function App() {

  return (
    <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
