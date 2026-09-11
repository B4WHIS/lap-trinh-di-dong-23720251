import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CategoryChips = () => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>Category chips</Text>
      <View style={styles.category}>
        <Text style={styles.categoryText}>Văn học</Text>
        <Text style={styles.categoryText}>Kinh tế</Text>
        <Text style={styles.categoryText}>Thiếu nhi</Text>
        <Text style={styles.categoryText}>Truyện tranh</Text>
        <Text style={styles.categoryText}>Ngoại ngữ</Text>
        <Text style={styles.categoryText}>Lịch sử</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 2,
    margin: 20,
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderColor: "#f08c8c",
    borderStyle: "dashed",
  },
  categoryTitle: {
    position: "absolute",
    top: -18,
    textAlign: "center",
    left: 0,
    right: 0,
    fontWeight: "bold",
  },
  category: { flexDirection: "row", flexWrap: "wrap", gap: 8, flex: 1 },
  categoryText: {
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "auto",
    margin: 2,
    borderColor: "#d49090",
    textAlign: "center",
  },
});

export default CategoryChips;
