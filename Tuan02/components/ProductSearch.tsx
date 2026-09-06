import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  Button,
} from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
}
interface ProductResponse {
  products: Product[];
  total: number;
}

const ProductSearch = () => {
  const [keyword, setKeyword] = useState<string>("phone");
  const [product, setProduct] = useState<Product[]>([]);
  const fetchProduct = async (keyword: string, limit: number) => {
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + keyword + "&limit=" + limit,
    );
    const data = await response.json();
    setProduct((data as ProductResponse).products);
  };
  useEffect(() => {
    fetchProduct(keyword, 20);
  }, []);

  return (
    <View style={{ flex: 1 , padding: 10}}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 8,
          margin: 10,
          borderRadius: 6,
        }}
        value={keyword}
        onChangeText={setKeyword}
      ></TextInput>
      <Button title="Search" onPress={() => fetchProduct(keyword, 5)}></Button>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              margin: 5,
              borderWidth: 1,
            }}
          >
            <Text>
              {item.title}, price: {item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductSearch;
