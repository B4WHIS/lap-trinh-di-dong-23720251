import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const NewsFeed = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      setTodos(data as Todo[]);
    };
    fetchTodo();
  }, []);

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 12,
            borderBottomWidth: 2,
            borderBottomColor: "#ddd",
          }}
        >
          {item.userId}-{item.title}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default NewsFeed;
