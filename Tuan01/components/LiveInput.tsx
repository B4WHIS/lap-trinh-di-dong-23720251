import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const LiveInput = () => {
  const [text, setText] = useState<string>("");

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Nhập nội dung tại đây..."
        placeholderTextColor={"black"}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          borderRadius: 8,
          width: 250,
        }}
      ></TextInput>
      <Text>Số kí tự đã gõ: {text.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LiveInput;
