import React, { memo, PureComponent } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class UselessTextInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          text: null,
          loading: false,
          userId: null,
          name: null
        };

    }
    _handlePress = (event) => {
      this.setState({loading: true});
      fetch('http://192.168.1.82:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.text,
        })
      })

      .then((response) => response.json())
      .then((responseData) => {
        console.log("RESULTS HERE:", responseData);

        this.setState({
          loading: false,
          userId: responseData.id,
          name: responseData.name
        });
      })
      .catch((error) =>{
        console.error(error);
      })
    };

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

};
