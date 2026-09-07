import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const PullToRefreshList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data as Todo[]);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    const response = await fetchTodos();

    setRefreshing(false);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10, margin: 20 }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        refreshing={refreshing}
        onRefresh={() => handleRefresh()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PullToRefreshList;
