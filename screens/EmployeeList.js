import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';


const EmployeeList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>List Of Employees</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>RANK: Manager</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>RANK: Manager</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>RANK: Manager</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>RANK: Manager</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#eaaf3d',
  },
  images: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 30,
    marginLeft:75,
    marginRight:75,
  
  },
  text: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  headtext: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'poppins',
  },
});

export default EmployeeList;
