import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const CartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        Giỏ hàng của bạn
      </Text>
      <ScrollView
        style={{ flex: 1, borderWidth: 1, borderStyle: "dashed", margin: 10 }}
      >
        <View style={styles.CartItem}>
          <View style={styles.subCardItem}>
            <Image
              source={{
                uri: "https://www.netabooks.vn/Data/Sites/1/Product/17752/toi-thay-hoa-vang-tren-co-xanh.jpg",
              }}
              style={{ width: 60, height: 60 }}
            />
            <View style={{ flex: 1, paddingHorizontal: 12 }}>
              <Text>Tên sản phẩm</Text>
              <Text>Số lượng</Text>
            </View>
            <View>
              <Text>Giá</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkout}>
        <Text>
          Tổng tiền:{" "}
          <Text style={{ color: "red", fontWeight: "bold" }}>240.000đ</Text>
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff" }}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CartItem: {
    flexDirection: "column",
    // borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  subCardItem: {
    borderWidth: 1,
    padding: 5,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  checkout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#bd3735",
  },
  button: {
    borderWidth: 1,
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});

export default CartScreen;
