import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("mejra");
  const [person, setPerson] = useState({
    name: "Spongebob",
    age: 27,
  });
  const [age, setAge] = useState();
  const [img, setImg] = useState(require("./pics/spongebob.png"));

  const clickHandler = () => {
    setPerson({ name: "Patrick", age: 29 });
    setImg(require("./pics/patrick.png"));
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        {/*<Text>My name is {name}</Text>*/}
        <Text>
          His name is {person.name} and he is {person.age} years old.
        </Text>
        <Image source={img} style={styles.image} />
        <Button title="Next character" onPress={clickHandler} />
        <View style={styles.btnContainer}></View>
      </View>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.txtinput}
        placeholder="e.g Jane Doe"
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter age: </Text>
      <TextInput
        keyboardType="numeric"
        style={styles.txtinput}
        placeholder="e.g 26"
        onChangeText={(val2) => setAge(val2)}
      />

      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  header: {
    padding: 50,
    alignSelf: "stretch",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "blue",
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    onClick: "pointer",
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 50,
    padding: 20,
  },
  txtinput: {
    borderWidth: 1,
    borderColor: "#777",
    width: 150,
    padding: 5,
    marginBottom: 10,
  },
});
