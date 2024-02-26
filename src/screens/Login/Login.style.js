import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 40,
  },
  signInForm: {
    gap: 40,
  },
  form: {
    gap: 16,
  },
  formField: {
    gap: 8,
  },
  actionsContainer: {
    gap: 20,
    marginTop: -16,
  },
  forgotPassword: {
    fontWeight: "700",
    color: colors.blue,
    textAlign: "center",
  },
  footer: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 16,
    textAlign: "center",
  },
  signUp: {
    textDecorationLine: "underline",
  },
});

export default styles;
