import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ButtonGroup, Button } from 'react-native-elements';
import { View, Text } from 'react-native'

export default class FilterScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
      selectedIndex1: 0,
      selectedIndex2: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
    this.updateIndex1 = this.updateIndex1.bind(this)
    this.updateIndex2 = this.updateIndex2.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex: selectedIndex })
  }

  updateIndex1(selectedIndex1) {
    this.setState({ selectedIndex1: selectedIndex1 })
  }

  updateIndex2(selectedIndex2) {
    this.setState({ selectedIndex2: selectedIndex2 })
  }

  render() {
    const consoleButtons = ['Switch', 'PS4', 'xBox', 'PC']
    const competitiveButtons = ['Amateur', 'Intermediate', 'Professional']
    const genderButtons = ['Male', 'Female', 'No Preference']
    const { selectedIndex } = this.state
    const { selectedIndex1 } = this.state
    const { selectedIndex2 } = this.state

    return (
      <View>
        <Text style={{ textAlign: 'center', paddingTop: 15, paddingLeft: 10, fontSize: 15 }}>Console Type</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={consoleButtons}
          containerStyle={{ height: 45, marginTop: 8, marginBottom: 25 }}
        />
        <Text style={{ textAlign: 'center', paddingTop: 15, paddingLeft: 10, fontSize: 15 }}>Competitiveness</Text>
        <ButtonGroup
          onPress={this.updateIndex1}
          selectedIndex={selectedIndex1}
          buttons={competitiveButtons}
          containerStyle={{ height: 45, marginTop: 8 , marginBottom: 25}}
        />
        <Text style={{ textAlign: 'center', paddingTop: 15, paddingLeft: 10, fontSize: 15 }}>Gender</Text>
        <ButtonGroup
          onPress={this.updateIndex2}
          selectedIndex={selectedIndex2}
          buttons={genderButtons}
          containerStyle={{ height: 45, marginTop: 8, marginBottom: 25 }}
        />
        <Button style={{ marginTop: 30 }} title="Apply Filters" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}

FilterScreen.navigationOptions = {
  title: 'Filter',
};
