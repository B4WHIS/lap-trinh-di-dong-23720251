import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const FloatingCartButton = () => {
  return (
    <View style={styles.floatingContainer}>
      <Text>
        <AntDesign name="shopping-cart" size={24} color="black" />
      </Text>
      <View>
        <Text style={styles.textFloating}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    borderWidth: 1,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    bottom: 24,
    right: 20,
    borderRadius: 28,
    position: "absolute",
    backgroundColor: "#fff",
  },

  textFloating: {
    position: "absolute",
    color: "#fff",
    fontWeight: "bold",
    bottom: 20,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 30,
    width: 30,
    height: 30,
    left: 4,
    paddingLeft: 10,
    backgroundColor: "#d44040",
    paddingTop: 2,
  },
});

export default FloatingCartButton;
