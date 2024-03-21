import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const [name, setName] = useState("mejra");
  const [person, setPerson] = useState({
    name: "Spongebob",
    age: 27,
  });
  const [img, setImg] = useState(require("./pics/spongebob.png"));

  const clickHandler = () => {
    setPerson({ name: "Patrick", age: 29 });
    setImg(require("./pics/patrick.png"));
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
