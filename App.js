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
import ProductDetails from './screens/ProductDetails';
import OrderDetails from './screens/OrderDetails';
import EmployeeDetails from './screens/EmployeeDetails';
function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text
        style={{
          fontSize: 20,
          
          fontFamily: 'poppins',
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: 'center',
        }}>
        Admin Application{' '}
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
    backgroundColor: '#467094',
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
        <Stack.Screen
          name="Home Screen"
          options={{ headerTitleAlign: 'center' }}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: 'Products', headerTitleAlign: 'center' }}
          name="Products"
          component={ProductList}
        />
        <Stack.Screen
          options={{ title: 'Employees', headerTitleAlign: 'center' }}
          name="Employees"
          component={EmployeeList}
        />
        <Stack.Screen
          options={{ title: 'Orders', headerTitleAlign: 'center' }}
          name="Orders"
          component={OrderList}
        />
        <Stack.Screen
          options={{ title: 'Product Details', headerTitleAlign: 'center' }}
          name="ProductDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          options={{ title: 'Employee Details', headerTitleAlign: 'center' }}
          name="EmployeeDetails"
          component={EmployeeDetails}
        />
        <Stack.Screen
          options={{ title: 'Order Details', headerTitleAlign: 'center' }}
          name="OrderDetails"
          component={OrderDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
