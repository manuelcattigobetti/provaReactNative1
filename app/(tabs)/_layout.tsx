import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "red", tabBarInactiveBackgroundColor: "green", 
                          tabBarStyle: {backgroundColor: "lightblue", 
                                        borderTopColor: "yellow",
                                        height: 90,
                                        paddingBottom: 10,
                                        paddingTop: 10
                                      }
                        }}>
      <Tabs.Screen name='index' options={{title: "", tabBarIcon: ({color, size}) => ( <Ionicons name='flash-outline' size={size}/>)}} />
      <Tabs.Screen name='settings' options={{title: "", tabBarIcon: ({color, size}) => ( <Ionicons name='settings' size={size}/>)}} />
    </Tabs>
)
}


export default TabsLayout