import React, { useState } from "react";
import { Alert, StyleSheet, View, Button, Text } from "react-native";

interface CustomError {
  message: string;
}

const ApiErrorHandling = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const callApiWithError = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/100",
      );
      if (!response.ok)
        throw new Error("Loi ket noi may chu! ma phan hoi: " + response.status);
      alert("Goi api thanh cong");
    } catch (error) {
      const err = error as CustomError;
      setErrorMessage(err.message);
      Alert.alert("co loi xay ra", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Button
        title={loading ? "Dang ket noi..." : "Goi API thu"}
        disabled={loading}
        onPress={callApiWithError}
      ></Button>
      {errorMessage && (
        <Text style={{ color: "red", margin: 10, textAlign: "center" }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ApiErrorHandling;
