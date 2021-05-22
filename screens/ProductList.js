import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';



const ProductList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>List Of Products</Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $450</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $570</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $1110</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
          <Text style={styles.text}>Name : lorem ispum</Text>
          <Text style={styles.text}>Price: $550</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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

export default ProductList;
