import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import {connect} from "react-redux";
import { changeText, createUserRequest } from "../../redux/actions";
import ration from "../ration"

const styles = StyleSheet.create({
  container: {
    fontFamily:'Roboto',
    flexDirection: 'column',
    alignItems:'stretch'
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
    const {
      sex,
      age,
      weight,
      height,
    } = this.props;

    function calculateMaleCalories(age, weight, height) {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    }

    function calculateFemaleCalories(age, weight, height) {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calories = sex === 'male' ? calculateMaleCalories(age, weight, height) : calculateFemaleCalories(age, weight, height);
    const sexRation = sex === 'male' ? ration.male : ration.female;

    function getRation() {
      return sexRation.map((item) => {
        return Object.keys(item).map( (key) => {
          return <View
              key={key}
              style={{
                fontFamily:'Roboto',
                flexDirection: 'row',
                alignItems:'start',
                marginHorizontal: 15,
                marginVertical: 5,
              }}
          >
            <Text
                style={{
                  fontWeight: 'bold',
                  width: "30%",
                }}
            >
              {key}:
            </Text>
            <Text
                style={{
                  width: "70%",
                }}>
              {item[key]}
            </Text>
          </View>;
        });
      });
    }

    return (
      <View
        style={styles.container}>
          <ScrollView>
          <Text
              style={{
                textAlign:'center',
                margin: 15,
                fontSize: 20,
              }}
          >Ваша суточная норма составляет { calories } калорий! </Text>
            <Text
                style={{
                  textAlign:'center',
                  margin: 15,
                  fontSize: 16,
                }}
            > Рекомендуемый рацион: </Text>
          <View>{getRation()}</View>
          </ScrollView>
      </View>

    );
  }
}
const mapStateToProps = (state) => ({
  text: state.user.text,
  loading: state.user.loading,
  sex: state.user.sex,
  age: state.user.age,
  height: state.user.height,
  weight: state.user.weight,
});
const mapDispatchToProps = {
  changeText: changeText,
  createUserRequest: createUserRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
