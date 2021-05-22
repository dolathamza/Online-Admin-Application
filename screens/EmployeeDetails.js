import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';



const EmployeeDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>Employee Details</Text>
      </View>
      <ScrollView>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
          style={styles.images}
        />
        <Text style={styles.head}>Name:</Text>
        <Text style={styles.text}>Lorem </Text>
        <Text style={styles.head}>RANK:</Text>
        <Text style={styles.text}>Lorem </Text>
        <Text style={styles.head}>Biography:</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          egestas venenatis. Maecenas neque mauris, fringilla eu velit vel,
          malesuada ultricies nibh. Curabitur luctus risus vitae enim faucibus
          lobortis. Fusce sed interdum est. Duis non dictum risus, in dapibus
          purus. Vivamus accumsan metus eu ipsum ultrices tincidunt. Etiam
          tincidunt id leo vel blandit. Phasellus aliquam leo semper augue
          scelerisque mollis. Suspendisse eget quam bibendum metus malesuada
          vestibulum. Nullam ut felis metus. Aenean gravida vulputate arcu, nec
          vulputate velit. Sed viverra nibh sed dui euismod, non malesuada lacus
          elementum. Nunc lectus orci, sagittis ac lobortis in, dapibus in
          neque. Vivamus non aliquam mi. Quisque quis velit ornare, placerat
          odio sit amet, tempor odio. Nunc euismod fringilla urna. Sed vulputate
          lacinia nunc, condimentum congue lacus.
        </Text>
        <Text style={styles.space}></Text>
        <Text style={styles.space}></Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          egestas venenatis. Maecenas neque mauris, fringilla eu velit vel,
          malesuada ultricies nibh. Curabitur luctus risus vitae enim faucibus
          lobortis. Fusce sed interdum est. Duis non dictum risus, in dapibus
          purus. Vivamus accumsan metus eu ipsum ultrices tincidunt. Etiam
          tincidunt id leo vel blandit. Phasellus aliquam leo semper augue
          scelerisque mollis. Suspendisse eget quam bibendum metus malesuada
          vestibulum. Nullam ut felis metus. Aenean gravida vulputate arcu, nec
          vulputate velit. Sed viverra nibh sed dui euismod, non malesuada lacus
          elementum. Nunc lectus orci, sagittis ac lobortis in, dapibus in
          neque. Vivamus non aliquam mi. Quisque quis velit ornare, placerat
          odio sit amet, tempor odio. Nunc euismod fringilla urna. Sed vulputate
          lacinia nunc, condimentum congue lacus.
        </Text>
        <Text style={styles.space}></Text>
        <Text style={styles.space}></Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          egestas venenatis. Maecenas neque mauris, fringilla eu velit vel,
          malesuada ultricies nibh. Curabitur luctus risus vitae enim faucibus
          lobortis. Fusce sed interdum est. Duis non dictum risus, in dapibus
          purus. Vivamus accumsan metus eu ipsum ultrices tincidunt. Etiam
          tincidunt id leo vel blandit. Phasellus aliquam leo semper augue
          scelerisque mollis. Suspendisse eget quam bibendum metus malesuada
          vestibulum. Nullam ut felis metus. Aenean gravida vulputate arcu, nec
          vulputate velit. Sed viverra nibh sed dui euismod, non malesuada lacus
          elementum. Nunc lectus orci, sagittis ac lobortis in, dapibus in
          neque. Vivamus non aliquam mi. Quisque quis velit ornare, placerat
          odio sit amet, tempor odio. Nunc euismod fringilla urna. Sed vulputate
          lacinia nunc, condimentum congue lacus.
        </Text>
                <Text style={{marginBottom: 50,}}></Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#7f6df3',
  },
  images: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 100,
    marginRight: 100,
  },
  text: {
    textAlign: 'center',
    backgroundColor: '#000000',
    fontSize: 18,
    borderRadius: 10,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headtext: {
    textAlign: 'center',
        marginTop: 15,

    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'poppins',
  },
  head: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 25,
    fontFamily: 'poppins',
  },
  space:{
    marginTop: 5,
    marginBottom: 5
  }
});

export default EmployeeDetails;
