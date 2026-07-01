import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

type CardProps = {
  title: string;
  subtitle?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: "default" | "outlined";
  children?: React.ReactNode;
};

export function Card({
  title,
  subtitle,
  onPress,
  style,
  variant = "default",
  children,
}: CardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, variant === "outlined" && styles.outlined, style]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  title: { fontSize: 16, fontWeight: "600", color: "#1A1A1A" },
  subtitle: { fontSize: 13, color: "#666", marginTop: 4 },
});
