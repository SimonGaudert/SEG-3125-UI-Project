import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Switch,
    Button
} from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
//import { ExpoConfigView } from '@expo/samples';

export default function ProfileScreen() {
    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
    //state = {switchValue:false}


    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.profile}>
                Profile
        </Text>
            <Image
                source={{ uri: 'https://i.redd.it/6onq25y0sh311.jpg', }}
                //borderRadius style will help us make the Round Shape Image
                style={{ width: 150, height: 150, borderRadius: 100 / 2 }}
            />
            <Text style={styles.text}>
                John, 20
        </Text>

            <Text style={{ textAlign: 'left' }}>
                About John
        </Text>

            <TextInput
                style={{ height: 50, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                multiline={true}
                editable={true}
                autoFocus={true}
                placeholder='Describe Yourself'
            />


            <Text style={{ textAlign: 'left' }}>
                Games You Own
        </Text>

            <TextInput
                style={{ height: 50, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                multiline={true}
                editable={true}
                autoFocus={true}
                placeholder='Enter Games You Own'
            />

            <Text style={{ textAlign: 'left' }}>
                School
        </Text>

            <TextInput
                style={{ height: 25, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                multiline={true}
                editable={true}
                autoFocus={true}
                placeholder='Add School'
            />

            <Text style={{ textAlign: 'left' }}>
                Living In
        </Text>

            <TextInput
                style={{ height: 25, width: 340, backgroundColor: '#E8E8E8', marginTop: 10, marginBottom: 10 }}
                multiline={true}
                editable={true}
                autoFocus={true}
                placeholder='Enter City'
            />

            {/* <Text style={{ textAlign:'left'}}>
            Show Your Location
            <Switch value={this.state.switchValue} onValueChange={(switchValue) => this.setState({switchValue})}/>
        </Text> */}



        </ScrollView>
    );
}

ProfileScreen.navigationOptions = {
    title: 'Profile',
    headerRight: (<View style={{ marginRight: 10 }}>
                    <TabBarIcon color='red' name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
                </View>),
};

const styles = StyleSheet.create({
    // MainContainer: {
    //   flex: 1,
    // //   justifyContent: 'center',
    // //   alignItems: 'center',
    //   backgroundColor: 'white',
    // },
    text: {
        margin: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    // text1: {
    //     margin: 10,
    //     fontSize: 15,
    //     color: 'black',
    //     fontWeight: 'bold',
    //   },
    profile: {
        marginBottom: 50,
        marginTop: 10,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
});
