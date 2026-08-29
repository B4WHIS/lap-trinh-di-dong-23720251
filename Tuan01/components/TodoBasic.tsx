import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

interface TodoItem {
  id: string;
  title: string;
}
const data = [
  { id: "1", title: "Học React" },
  { id: "2", title: "Làm bài tập" },
];

const TodoBasic = () => {
  const [todos, setTodos] = useState<TodoItem[]>(data);
  return (
    <View>
      {todos.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TodoBasic;
