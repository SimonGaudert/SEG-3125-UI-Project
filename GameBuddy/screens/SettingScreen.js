import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { SettingsScreen, SettingsData } from "react-native-settings-screen";
import {
  Button, Text, View, Switch
} from 'react-native';

import { Icon, } from 'react-native-elements'


export default class SettingScreen extends React.Component {
  state = {
    switchValue: false,
  };

  state = {
    switchValue1: false,
  };
  state = {
    switchValue2: false,
  };
  state = {
    switchValue3: false,
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({
      switchValue: !state.switchValue,
    }));

  _handleToggleSwitch1 = () =>
    this.setState(state => ({
      switchValue1: !state.switchValue1,
    }));

  _handleToggleSwitch2 = () =>
    this.setState(state => ({
      switchValue2: !state.switchValue2,
    }));

  _handleToggleSwitch3 = () =>
    this.setState(state => ({
      switchValue3: !state.switchValue3,
    }));

  settingsData = [
    {
      type: 'SECTION',
      header: 'My Section'.toUpperCase(),
      rows: [
        {
          title: 'Share Location',
          subtitle: 'Your location will be shared with other gamers.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitch}
              value={this.state.switchValue}
            />
          ),
        },
        {
          title: 'Enable Notification',
          subtitle: 'You will recieve notifications about matches and direct messages.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitch1}
              value={this.state.switchValue1}
            />
          ),
        },
        {
          title: 'Enable Discoverability',
          subtitle: 'Allow gamers to see your profile while swiping.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitch2}
              value={this.state.switchValue2}
            />
          ),
        },
        {
          title: 'Share Age',
          subtitle: 'Show age on your profile.',
          renderAccessory: () => (
            <Switch
              label="Hello"
              onValueChange={this._handleToggleSwitch3}
              value={this.state.switchValue3}
            />
          ),
        },
      ],
    },
    {
      type: 'CUSTOM_VIEW',
      render: () => (
        <Button
          title="Logout"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      ),
    },
    {
      type: 'CUSTOM_VIEW',
      render: () => (
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            color: '#999',
            marginBottom: 40,
            marginTop: 30,
          }}
        >
          v1.2.3
        </Text>
      ),
    },
  ]

  render() {
    return (
      <SettingsScreen
        data={this.settingsData}
      />

    )
  }
}

SettingScreen.navigationOptions = {
  title: 'Settings',
};
