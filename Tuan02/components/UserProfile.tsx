import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );

      const data = await responce.json();
      setUser(data as User);
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <Text style={{ padding: 20 }}>Đang tải thông tin người dùng...</Text>
    );
  }
  return (
    <View style={{ padding: 20 }}>
      <Text>name: {user.name}</Text>
      <Text>email: {user.email}</Text>
      <Text>phone: {user.phone}</Text>
      <Text>website: {user.website}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserProfile;
