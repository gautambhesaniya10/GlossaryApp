import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/Login';
import Splash from './src/Screens/Splash';
import Signup from './src/Screens/Signup';
import Home from './src/Screens/Home';
import MyAddress from './src/Screens/MyAddress';
import AddAddress from './src/Screens/AddAddress';
import CheckOut from './src/Screens/CheckOut';
import SuccessOrder from './src/Screens/SuccessOrder';
import Orders from './src/Screens/Orders';
import OtherScreen from './src/Screens/OtherScreen';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessOrder"
          component={SuccessOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtherScreen"
          component={OtherScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
