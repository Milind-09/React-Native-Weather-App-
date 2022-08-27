import Country from './components/Country';
import Weather from './components/Weather';
import WeatherState from './Context/WeatherState';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

let App: React.FC = () => {
  let Stack = createNativeStackNavigator();
  return (
    <WeatherState>
      <NavigationContainer>
        <Stack.Navigator initialRouterName="Screen1">
          <Stack.Screen name="Screen1" component={Country} />
          <Stack.Screen name="GoBack" component={Weather} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherState>
  );
};
export default App;
