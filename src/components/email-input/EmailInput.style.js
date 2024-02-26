import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    color: colors.black,
  },
});

export default styles;
