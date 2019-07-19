import React, { PureComponent } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {connect} from "react-redux";
import { changeText, createUserRequest } from "../../redux/actions";

const styles = StyleSheet.create({
  container: {
    fontFamily:'Roboto', flexDirection: 'row', alignItems:'stretch'
  },
  textInput: {
    flex: 4, borderColor: 'gray', borderWidth: 1, color: 'gray', textAlign:'center'
  },
  buttons: {
    flex: 1, borderWidth: 1, borderColor: 'blue'
  }
});

class ChatPage extends PureComponent {
  render() {
    console.log(this.props.text);
    const { text, changeText } = this.props;
    return (
      <View
        style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={changeText}
          value={text}
          placeholder="Enter your message"
        /><Button
          style={styles.buttons}
          onPress={createUserRequest}
          title='Send message'>
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
  changeText: changeText,
  createUserRequest: createUserRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
