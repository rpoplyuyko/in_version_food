import React, { memo, PureComponent } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'
import { changeName, createUserRequest } from '../../../src/redux/actions'

class EnterPage extends PureComponent {
    _handlePress = (event) => {
    };
    render() {
        console.log(this.props.loading);
        const { name, text, changeText, createUserRequest } = this.props;

        return (
            <View
                style={{fontFamily:'Roboto', alignItems:'center'}}>
                <Text>Your name will be: </Text><Text>{name ? name : text }</Text>
                <Text>
                    Enter name
                </Text>
                <TextInput
                    style={{height: 40, width:250, borderColor: 'gray', borderWidth: 1, color: 'gray', textAlign:'center'}}
                    onChangeText={changeText}
                    value={text}
                    placeholder="Example3000"
                />
                <Button
                    style={{borderWidth: 1, borderColor: 'blue'}}
                    onPress={createUserRequest}
                    title='Enter room'>
                </Button>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
  text: state.user.text,
  loading: state.user.loading,
  name: state.user.name,
  userId: state.user.userId,
});
const mapDispatchToProps = {
  changeText: changeName,
  createUserRequest: createUserRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(EnterPage);
