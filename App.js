
import { StyleSheet } from 'react-native';
import CreateResume from './components/CreateResume';
import DownloadResume from './components/DownloadResume';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateResume">
        <Stack.Screen name="CreateResume" component={CreateResume} />
        <Stack.Screen name="DownloadResume" component={DownloadResume} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
