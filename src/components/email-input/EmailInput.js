import { TextInput } from "react-native";

import styles from "./EmailInput.style";

export default function EmailInput() {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="john@example.com"
      keyboardType="email-address"
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
}
