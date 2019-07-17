import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GamesScreen from '../screens/GamesScreen';
import FilterScreen from '../screens/FilterScreen';
import SettingScreen from '../screens/SettingScreen';


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
    Filter: FilterScreen
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

const ChatStack = createStackNavigator(
  {
    Chat: ChatScreen,
  },
  config
);

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'} />
  ),
};

ChatStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
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
    Game: GamesScreen,
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
  ProfileStack,
  ChatStack,
  HomeStack,
  GamesScreenStack,
  SettingsStack
});

tabNavigator.path = '';

export default tabNavigator;
