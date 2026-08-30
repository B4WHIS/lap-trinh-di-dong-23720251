import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

const MyButton = ({ label, onPress, color = "blue" }: MyButtonProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ backgroundColor: color, padding: 10, borderRadius: 8 }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyButton;
