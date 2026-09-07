import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Text } from "react-native";

function filterByName<
  T extends {
    name: string;
  },
>(items: T[], keyword: string): T[] {
  return items.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
}
const product = [
  { id: 1, name: "iPhone 15", price: 1000 },
  { id: 2, name: "Samsung Galaxy", price: 800 },
  { id: 3, name: "MacBook Air", price: 1200 },
  { id: 4, name: "iPad Pro", price: 900 },
];

const FilteredList = () => {
  const [keyword, setKeyword] = useState<string>("");
  const filteredProducts = filterByName(product, keyword);
  return (
    <View>
      <TextInput
        onChangeText={setKeyword}
        style={{ borderWidth: 1, padding: 10, margin: 20 }}
        placeholder="nhap o day"
        value={keyword}
      />
      <FlatList
        style={{ padding: 10, margin: 20 }}
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{borderWidth: 1, padding:10}}>
            {item.name} - {item.price}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FilteredList;
