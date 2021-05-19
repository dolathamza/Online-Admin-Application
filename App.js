import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './screens/ProductList';
import EmployeeList from './screens/EmployeeList';
import OrderList from './screens/OrderList';
function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'poppins',
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: 'center',
        }}>
        Click any button to move on the next screen
      </Text>
      <TouchableOpacity style={style.touch}>
        <Text
          style={style.text}
          onPress={() => navigation.navigate('Products')}>
          Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.touch}>
        <Text
          style={style.text}
          onPress={() => navigation.navigate('Employees')}>
          Employees
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.touch}>
        <Text style={style.text} onPress={() => navigation.navigate('Orders')}>
          Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#eaaf3d',
  },
  touch: {
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'poppins',
  },
});
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            
            backgroundColor: '#ffffff',
            borderBottomWidth: 2,
            borderBottomColor: '#000000',
          },
          headerTintColor: '#000000',
        }}>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen
          options={{ title: 'Products' }}
          name="Products"
          component={ProductList}
        />
        <Stack.Screen
          options={{ title: 'Employees' }}
          name="Employees"
          component={EmployeeList}
        />
        <Stack.Screen
          options={{ title: 'Orders' }}
          name="Orders"
          component={OrderList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
