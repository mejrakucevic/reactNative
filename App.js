import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, World!</Text>
      </View>

      <StatusBar style="auto" />
      <View style={styles.body}>
        <Text>This is some text woo!</Text>
        <Text>This is some text woo!</Text>
        <Text>This is some text woo!</Text>
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
    backgroundColor: "whitesmoke",
    padding: 20,
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
});
