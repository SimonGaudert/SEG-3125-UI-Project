import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { Icon } from 'react-native-elements'

import CardStack, { Card } from 'react-native-card-stack-swiper';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CardStack
        style={styles.content}

        renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No cards remaining, try refreshing.</Text>}
        ref={swiper => {
          this.swiper = swiper
        }}

        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={() => console.log('onSwipedLeft')}
      >
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
        <Card style={[styles.card, styles.card2]}><Text style={styles.label}>B</Text></Card>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
        <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card>

      </CardStack>


      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
            this.swiper.swipeLeft();
          }}>
            <Icon name='clear' color='#fd267d' size="50" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            for(let i = 0; i<5;i++){
              this.swiper.goBackFromLeft();
            }
          }}>
            <Icon name='refresh' color='rgb(246,190,66)' style={{ height: 62, width: 62 }} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
            this.swiper.swipeRight();
          }}>
            <Icon name='check' color='#01df8a' size="50" />
          </TouchableOpacity>
        </View>

      </View>
    </View>

    // <View style={styles.container}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.contentContainer}>
    //     <View style={styles.welcomeContainer}>
    //       <Image source={require('../assets/images/05.jpg')} style={[styles.welcomeImage, { width: (Dimensions.get('window').width) -8 }, { height: (Dimensions.get('window').height)/2}]}/>
    //     </View>

    //     <View style={styles.titleContainer}>

    //       <Text style={styles.nameText}>
    //         Steve, 21
    //       </Text>
    //     </View>

    //     <View style={styles.infoContainer}>

    //     <Text style={styles.infoText}>
    //       About Me:{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       stuff{'\n'}
    //       </Text>

    //     </View>

    //     <View style={styles.infoContainer}>
    //       <Text style={styles.infoText}>
    //         Favourite Games:{'\n'}
    //         Rocket League{'\n'}
    //         Fifa19{'\n'}

    //         </Text>

    //     </View>
    //   </ScrollView>
    // </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Match",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(25,28,36)',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {//
//     marginRight: 4,
//     marginLeft: 4,
//     marginTop: 4,
//     paddingTop: 20,
//     paddingBottom: 20,
//     backgroundColor: '#68a0cf',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#fff'
//   },
//   titleContainer: {
//     //alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   nameText: {//
//     fontSize: 25,
//     color: 'rgba(255,255,255, 0.9)',
//     lineHeight: 24,
//     textAlign: 'left',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   infoContainer: {
//     marginTop: 15,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     //alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   infoText: {//
//     fontSize: 15,
//     color: 'rgba(255,255,255, 0.9)',
//   },
// });
