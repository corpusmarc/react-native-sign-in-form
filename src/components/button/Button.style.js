import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    padding: 12,
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.9,
  },
});

export default styles;
