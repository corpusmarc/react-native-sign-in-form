import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "./Wrapper.style";

export default function Wrapper({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
}
