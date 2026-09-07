import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
}
const PaginationList = () => {
  const mockResponse: ApiResponse<Product> = {
    total: 40,
    page: 1,
    data: [
      { id: 1, title: "iPhone 15 Pro Max 256GB", price: 12990000 },
      { id: 2, title: "MacBook Air M3 13 inch", price: 10990000 },
      { id: 3, title: "Tai nghe AirPods Pro 2", price: 2490000 },
      { id: 4, title: "Apple Watch Series ", price: 3990000 },
    ],
  };

  return (
    <View style={{ padding: 20, margin: 10 }}>
      <Text>
        Trang hien tai: {mockResponse.page} - Tong so: {mockResponse.total} san
        pham
      </Text>
      <FlatList
        style={{ padding: 20, margin: 10 }}
        data={mockResponse.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 20, margin: 10, borderWidth: 1 }}>
            {item.title} - {item.price}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PaginationList;
