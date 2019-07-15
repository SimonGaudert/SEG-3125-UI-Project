import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GamesScreen from '../screens/GamesScreen';

import {
  Button, Text, View, 
} from 'react-native';

import {Icon} from 'react-native-elements'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: 
      <View style={{
          height: 80,
          width: 80,
          borderRadius: 100,
          backgroundColor: 'rgb(82,152,239)',
          paddingTop: 15}}>
        <Icon name="ios-add" color="white" type="ionicon" size={50}/>
      </View>
  
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Settings: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  title:'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';

const GamesScreenStack = createStackNavigator(
  {
    Settings: GamesScreen,
  },
  config
);

GamesScreenStack.navigationOptions = {
  tabBarLabel: 'Games',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

GamesScreenStack.path = '';

const tabNavigator = createBottomTabNavigator({
  
  // SettingsStack,
  ProfileStack,
  HomeStack,
  GamesScreenStack,
});

tabNavigator.path = '';

export default tabNavigator;
