import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface LoadingContainerProps {
  isLoading: boolean;
  children: React.ReactNode; //Dùng children để có thể nhét các thứ khác vào chứ không phải là text hiển thị
}

const LoadingContainerProps = ({
  isLoading,
  children,
}: LoadingContainerProps) => {
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="green"></ActivityIndicator>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoadingContainerProps;
