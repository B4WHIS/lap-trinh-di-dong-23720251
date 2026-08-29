import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserCard = (props: UserCardProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.isAdmin ? "Quản trị viên" : "Khách hàng"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserCard;
