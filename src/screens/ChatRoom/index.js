import React, { PureComponent } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class ChatPage extends PureComponent {
  render() {
    console.log(this.state.text);
    return (
      <View
        style={{fontFamily:'Roboto', alignItems:'center'}}>
        <Text>Your name will be: </Text><Text>{this.state.name ? this.state.name : this.state.text }</Text>
        <Text>
          Enter name
        </Text>
        <TextInput
          style={{height: 40, width:250, borderColor: 'gray', borderWidth: 1, color: 'gray', textAlign:'center'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Example3000"
        />
        <Button
          style={{borderWidth: 1, borderColor: 'blue'}}
          onPress={this._handlePress}
          title='Enter room'>
        </Button>
      </View>

    );
  }
}
