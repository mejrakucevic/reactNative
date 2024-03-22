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
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "mejra", key: "1" },
    { name: "ena", key: "2" },
    { name: "sara", key: "3" },
    { name: "charlie", key: "4" },
    { name: "mOOOOO", key: "5" },
    { name: "mOOOOO", key: "6" },
    { name: "mOOOOO", key: "7" },
    { name: "mOOOOO", key: "8" },
    { name: "mOOOOO", key: "9" },
    { name: "mOOOOO", key: "10" },
  ]);
  const pressHandler = (key) => {
    console.log(key);
    setPeople((prevPeople) => {
      // for removing an item!!
      return prevPeople.filter((person) => person.key != key);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </SafeAreaView>
  );
}

/*
  const [name, setName] = useState("mejra");
  
  const [age, setAge] = useState();
  const [img, setImg] = useState(require("./pics/spongebob.png"));

  const clickHandler = () => {
    setPerson({ name: "Patrick", age: 29 });
    setImg(require("./pics/patrick.png"));
  };

  return (
    <View style={styles.container}>
      {/* header */

/*
      <View style={styles.header}>
        {/*<Text>My name is {name}</Text>*/

/*
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
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "100",
    paddingHorizontal: "20",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginTop: 25,
    padding: 20,
    backgroundColor: "pink",
    fontSize: 22,
    marginHorizontal: 10,
    marginTop: 25,
  },
});
