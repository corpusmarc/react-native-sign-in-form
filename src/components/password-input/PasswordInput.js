import { TextInput } from "react-native";

import styles from "./PasswordInput.style";

export default function PasswordInput() {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="******"
      secureTextEntry
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
}
