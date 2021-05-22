import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const OrderList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>List Of Orders</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $450</Text>
          <Text style={styles.text}>Manager: lorem</Text>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/4464817/pexels-photo-4464817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={styles.images}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $570</Text>
          <Text style={styles.text}>Manager: lorem</Text>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/4464817/pexels-photo-4464817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={styles.images}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $1110</Text>
          <Text style={styles.text}>Manager: lorem</Text>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/4464817/pexels-photo-4464817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={styles.images}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $550</Text>
          <Text style={styles.text}>Manager: lorem</Text>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/4464817/pexels-photo-4464817.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={styles.images}
          />
        </TouchableOpacity>
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
    marginLeft: 75,
    marginRight: 75,
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

export default OrderList;
