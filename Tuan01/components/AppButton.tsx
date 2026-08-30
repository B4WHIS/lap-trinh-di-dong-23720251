import React from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const AppButton = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  icon,
}: AppButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonBase,
          styles[variant],
          styles[size],
          (disabled || loading) && styles.disabledStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator
            color={variant === "outline" ? "#007AFF" : "#FFFFFF"}
          />
        ) : (
          <View>
            <Text
              style={[
                variant === "outline" ? styles.textOutline : styles.textDefault,
                textSizeMap[size],
              ]}
            >
              {title}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  primary: { backgroundColor: "#007AFF" },
  secondary: { backgroundColor: "#6c757d" },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  danger: {
    backgroundColor: "#dc3545",
  },
  small: { paddingVertical: 6, paddingHorizontal: 12 },
  medium: { paddingVertical: 10, paddingHorizontal: 16 },
  large: { paddingVertical: 14, paddingHorizontal: 20 },

  textOutline: { color: "#007AFF", fontWeight: "bold" },
  textDefault: { color: "#FFFFFF", fontWeight: "bold" },
  text_small: { fontSize: 12 },
  text_medium: { fontSize: 15 },
  text_large: { fontSize: 18 },

  disabledStyle: { opacity: 0.5 },
});

const textSizeMap = {
  small: styles.text_small,
  medium: styles.text_medium,
  large: styles.text_large,
};

export default AppButton;
