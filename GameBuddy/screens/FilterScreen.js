import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ButtonGroup,Button } from 'react-native-elements';
import { View,  } from 'react-native'

export default function FilterScreen({ navigation }) {
  nav = navigation;
  this.state = {
    selectedIndex: 1
  }
  // this.updateIndex = this.updateIndex.bind(this)

  let buttons = ['Switch', 'xBox', 'PS4']
  const { selectedIndex } = this.state

  function update(i){
    console.log(i)
    state={selectedIndex: i}
  }

  return (
    <View>
      <ButtonGroup
        onPress={update(0)}
        buttons={buttons}
        selectedIndex={selectedIndex}
      />
      <Button style={{paddingTop:30}} title='Filter' onPress={() => this.nav.goBack()}/>
    </View>
  );
}

FilterScreen.navigationOptions = {
  title: 'Filter',
};
