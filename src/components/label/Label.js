import { Text } from "react-native";

import styles from "./Label.styles";

export default function Label({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}
