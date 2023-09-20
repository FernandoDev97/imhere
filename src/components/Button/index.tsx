import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "add" | "remove";
  clickButton: () => void;
}

export function Button({ children, variant, clickButton }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={clickButton}
      style={variant === "add" ? styles.buttonAdd : styles.buttonRemove}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
