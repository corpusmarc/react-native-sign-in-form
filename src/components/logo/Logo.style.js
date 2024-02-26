import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
  },
  logoContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 4,
  },
  logoText: {
    color: colors.black,
    fontSize: 32,
    fontWeight: "700",
  },
  appName: {
    color: colors.blue,
  },
  logoSubText: {
    color: colors.darkGray,
    fontWeight: "600",
    marginTop: -16,
  },
});

export default styles;
