import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';


export default class GamesScreen extends Component {
  render() {
    //let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        //style={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
        <Text style={styles.welcome}> Select Your Games!</Text>
        <Image source={require('../assets/images/CSGOBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4}]}/>
        <Image source={require('../assets/images/mkBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4}]}/>
        <Image source={require('../assets/images/rlBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/owBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/mmBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/alBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/dbBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/gtaBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/mcBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/pubgBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/dqBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/fnBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/mhBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/r6Banner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/lolBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/u4Banner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/arkBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/fifaBanner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/pdBanner.png')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>
        <Image source={require('../assets/images/ror2Banner.jpg')} style={[styles.contentContainer, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/4 }]}/>

      </ScrollView>
    );
  }
}

GamesScreen.navigationOptions = {
  title: 'Games',
};




const styles = StyleSheet.create({
  contentContainer: {
     marginRight:4,
     marginLeft:4,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  welcome: {
    color:'#fff',
    textAlign:'center',
  }
});
