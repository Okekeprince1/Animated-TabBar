import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons'

import  * as AllScreens  from './screens';
import AddButton from './components/AddButton';

const TabNavigator = createBottomTabNavigator(
    {
        Journal: {
            screen: AllScreens.JournalScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color='#CDCCCE'/>
            }
        },
        Measures: {
            screen: AllScreens.MeasuresScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color='#CDCCCE'/>
            }
        },
        Add: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon: <AddButton/>
            }
        },
        Treatment: {
            screen: AllScreens.TreatmentScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="band-aid" size={24} color='#CDCCCE'/>
            }
        },
        Profile: {
            screen: AllScreens.ProfileScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color='#CDCCCE'/>
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
)

export default createAppContainer(TabNavigator)