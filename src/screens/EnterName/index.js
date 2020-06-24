import React, { PureComponent } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { connect } from 'react-redux'
import {changeAge, changeHeight, changeSex, changeWeight} from "../../redux/actions";


class EnterPage extends PureComponent {
  static navigationOptions = {
    title: 'Приветствуем!',
  };

    render() {
        const {
            text,
            changeSex,
            changeAge,
            changeWeight,
            changeHeight,
            sex,
            age,
            weight,
            height,
            navigation: { navigate }
        } = this.props;
        const disabling = !(age && weight && height);
        return (
            <View
                style={{fontFamily:'Roboto', alignItems:'center'}}>
                <Text
                  style={{textAlign:'center', margin: 15}}
                >В данном приложении Вы сможете рассчитать нормальное количество калорий вашего дневного рациона на основе Вашего пола, веса, роста и возраста. Расчёт производится по формуле Миффлина-Сан-Жеора.</Text>
                <View
                   style={{
                       display:'flex',
                       marginHorizontal: 15,
                       flexDirection: 'row',
                       alignItems: 'center',
                       justifyContent: 'space-between',
                       width: '80%'
                   }}
                >
                    <Text>Мужчина</Text>
                    <View
                        style={{width: 40, height: 40, borderWidth: 2, borderColor: "#5da7ff", borderRadius: 50}}
                    >
                        <RadioButton
                            value="male"
                            color={'#5da7ff'}
                            status={sex === 'male' ? 'checked' : 'unchecked'}
                            onPress={() => changeSex('male')}
                        />
                    </View>
                    <Text>Женщина</Text>
                    <View
                        style={{width: 40, height: 40, borderWidth: 2, borderColor: "#5da7ff", borderRadius: 50}}
                    >
                        <RadioButton
                            value="female"
                            color={'#5da7ff'}
                            status={sex === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => changeSex('female')}
                        />
                    </View>
                </View>
                <TextInput
                    style={{height: 40, width:250, borderColor: 'gray', borderWidth: 1, color: 'gray', textAlign:'center', marginTop: 15}}
                    onChangeText={changeHeight}
                    value={text}
                    placeholder="Ваш вес в кг"
                />
                <TextInput
                    style={{height: 40, width:250, borderColor: 'gray', borderWidth: 1, color: 'gray', textAlign:'center', marginTop: 15}}
                    onChangeText={changeWeight}
                    value={text}
                    placeholder="Ваш рост в см"
                />
                <TextInput
                    style={{height: 40, width:250, borderColor: 'gray', borderWidth: 1, color: 'gray', textAlign:'center', marginTop: 15}}
                    onChangeText={changeAge}
                    value={text}
                    placeholder="Ваш возраст в годах"
                />
                <Button
                    style={{borderWidth: 1, borderColor: 'blue', marginHorizontal: 15}}
                    onPress={() => navigate('Chat')}
                    disabled={disabling}
                    title='Рассчитать'>
                </Button>
                <Text
                    style={{textAlign:'center', margin: 15, color: '#808080'}}
                >Внимание! Приложение носит исключительно рекомендательный характер. Для получения более чётких инструкций обратитесь к специалисту.</Text>
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
  changeSex: changeSex,
  changeAge: changeAge,
  changeWeight: changeHeight,
  changeHeight: changeWeight,
};
export default connect(mapStateToProps, mapDispatchToProps)(EnterPage);
