import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headtext}>List Of Employees</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#eaaf3d",
  },
 
  text: {
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
  headtext: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 20,
  },
});

export default Login;
