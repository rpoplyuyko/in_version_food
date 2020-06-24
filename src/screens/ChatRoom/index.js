import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, List, Title, Paragraph } from 'react-native-paper';
import {connect} from "react-redux";
import { changeText, createUserRequest } from "../../redux/actions";
import ration from "../ration2"

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
          const title = `День ${item.dayNumber}`;
          const image = {
              uri: `https://source.unsplash.com/1600x900/?food,health,${item.dayNumber}`
          };
          return <Card style={{
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
              margin: '5%',
          }}
          key={item.dayNumber}>
              <Card.Title title={title}/>
              <Card.Content>
              <Card.Cover source={image} />
                  <Title>Завтрак</Title>
                  {item.breakfast.map((dish, ind) => {
                     return <Paragraph key={ind}>- {dish.name} ({dish.calories} кал на 100гр); </Paragraph>
                  })}
                  <Paragraph style={{fontStyle: 'italic'}}>Примерно {Math.round(calories * 0.2)} калорий</Paragraph>
                  <Title>Обед</Title>
                  {item.dinner.map((dish, ind) => {
                      return <Paragraph key={ind}>- {dish.name} ({dish.calories} кал на 100гр);</Paragraph>
                  })}
                  <Paragraph style={{fontStyle: 'italic'}}>Примерно {Math.round(calories * 0.35)} калорий</Paragraph>
                  <Title>Полдник</Title>
                  {item.afternoon.map((dish, ind) => {
                      return <Paragraph key={ind}>- {dish.name} ({dish.calories} кал на 100гр);</Paragraph>
                  })}
                  <Paragraph style={{fontStyle: 'italic'}}>Примерно {Math.round(calories * 0.15)} калорий</Paragraph>
                  <Title>Ужин</Title>
                  {item.evening.map((dish, ind) => {
                      return <Paragraph key={ind}>- {dish.name} ({dish.calories} кал на 100гр);</Paragraph>
                  })}
                  <Paragraph style={{fontStyle: 'italic'}}>Примерно {Math.round(calories * 0.30)} калорий</Paragraph>
              </Card.Content>
          </Card>
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
