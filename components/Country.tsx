import { Text, View, TextInput, Image, Button, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import WeatherContext from '../Context/WeatherContext';

interface Props {
  navigation: any;
}
let Country: React.FC<Props> = ({ navigation }) => {
  let { inputValue, inputState, setGetCountryName } =
    React.useContext(WeatherContext);
  let getWeather = () => {
    navigation.navigate('GoBack');
    setGetCountryName(inputValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the Country Name</Text>
      <View style={styles.inputStyle}>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={'gray'}
          placeholder="Country Name"
          onChangeText={inputState}
        />
      </View>
      {inputValue === '' ? (
        <View style={styles.btn}>
          <Button title="Search" disabled />
        </View>
      ) : (
        <View style={styles.btn}>
          <Button title="Search" onPress={() => getWeather()} />
        </View>
      )}
    </View>
  );
};
export default Country;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  title: {
    color: 'blue',
    margin: 20,
  },
  btn: {
    height: 100,
    width: 100,
  },
  searchInput: {
    padding: 10,
    outlineStyle: 'none',
  },
  inputStyle: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    marginBottom: 20,
  },
});
