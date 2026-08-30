import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

type Gender = "male" | "female" | "other";

const GenderSelector = () => {
  const [gender, setGender] = useState<Gender>("male");
  return (
    <View>
      <TouchableOpacity
        onPress={() => setGender("male")}
        style={{
          backgroundColor: gender === "male" ? "blue" : "gray",
          padding: 10,
          margin: 5,
          borderRadius: 8,
          width: 200,
        }}
      >
        <Text style={{ color: "white" }}>Nam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setGender("female")}
        style={{
          backgroundColor: gender === "female" ? "blue" : "gray",
          padding: 10,
          margin: 5,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>Nữ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setGender("other")}
        style={{
          backgroundColor: gender === "other" ? "blue" : "gray",
          padding: 10,
          margin: 5,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>Other</Text>
      </TouchableOpacity>

      <Text>Giới tính đang chọn: {gender}</Text>
    </View>
  );
};

export default GenderSelector;
