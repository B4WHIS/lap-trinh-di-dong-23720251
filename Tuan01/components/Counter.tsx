import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  function tang() {
    setCount(count + 1);
  }
  function giam() {
    count > 0 ? setCount(count - 1) : 0;
  }
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{count}</Text>
      <Button title="+" onPress={tang}></Button>
      <Button title="-" onPress={giam}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
