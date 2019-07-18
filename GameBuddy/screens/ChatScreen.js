import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import {Text} from 'react-native'

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  }
  
  componentWillMount() {
    const avatar_url = this.props.navigation.getParam('avatar_url', 'no-name-found');
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello there. Want to play FIFA?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: avatar_url,
          },
        },
      ],
    })
  }


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

// export default function ChatScreen({ navigation }) {
//   state = {
//     messages: [],
//   }

//   const name = navigation.getParam('name', 'no-name-found');
//   const avatar_url = navigation.getParam('avatar_url', 'no-name-found');

//   navigation.goBack();

//   state = {
//     messages: [
//       {
//         _id: 1,
//         text: 'Nice to meet you John!',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: avatar_url,
//         },
//       }
//     ],
//   }

//   function onSend(messages = []) {
//     state = (previousState => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }))
//   }


//   return (
//     <GiftedChat
//       messages={this.state.messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }

// ChatScreen.navigationOptions = {
//   title: "name",
// };