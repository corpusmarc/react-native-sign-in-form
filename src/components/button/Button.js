import { Pressable, Text } from "react-native";

import styles from "./Button.style";

export default function Button({ text, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
