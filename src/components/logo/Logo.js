import { View, Text } from "react-native";

import LogoImage from "../../../assets/images/logo.svg";

import styles from "./Logo.style";

export default function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoImage width="80" height="80" />
      </View>

      <Text style={styles.logoText}>
        Sign in to <Text style={styles.appName}>MyApp</Text>
      </Text>

      <Text style={styles.logoSubText}>
        Get access to your portfolio and more
      </Text>
    </View>
  );
}
