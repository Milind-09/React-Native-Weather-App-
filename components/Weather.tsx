import { Text, View, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import WeatherContext from '../Context/WeatherContext';
import { DataTable } from 'react-native-paper';

export default function Weather() {
  let { country, WeatherState, weather, showWeather } =
    React.useContext(WeatherContext);
  let { capital, population, latlng, flag } = country;
  let { temp, humidity, windSpeed: speed, icon } = weather;
  return (
    <View>
      <DataTable style={styles.tableContainer}>
        <DataTable.Row>
          <DataTable.Cell>Capital</DataTable.Cell>
          <DataTable.Cell>{capital}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Population Icon</DataTable.Cell>
          <DataTable.Cell>{population}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell> Lat/Lng </DataTable.Cell>
          <DataTable.Cell>{latlng}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Flag</DataTable.Cell>
          <DataTable.Cell>{flag}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <View>
        <View style={styles.btn}>
          <Button title="Get Weather" onPress={WeatherState} />
        </View>
        {showWeather && (
          <View>
            <DataTable style={styles.tableContainer}>
              <DataTable.Row>
                <DataTable.Cell>Temperature</DataTable.Cell>
                <DataTable.Cell>{temp}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Weather Icon</DataTable.Cell>
                <DataTable.Cell>
                  <Image
                    source={{
                      uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                    }}
                    style={{ width: 50, height: 50 }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell> Wind Speed</DataTable.Cell>
                <DataTable.Cell>{speed}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Humidity</DataTable.Cell>
                <DataTable.Cell>{humidity}</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tableContainer: {
    paddingTop: 10,
  },

  btn: {
    width: 150,
    marginTop: 10,
    marginLeft: '25%',
  },
});
