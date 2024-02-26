import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Wrapper from "../../components/wrapper/Wrapper";
import Logo from "../../components/logo/Logo";
import Label from "../../components/label/Label";
import EmailInput from "../../components/email-input/EmailInput";
import PasswordInput from "../../components/password-input/PasswordInput";
import Button from "../../components/button/Button";
import styles from "./Login.style";

export default function Login() {
  return (
    <Wrapper>
      <View style={styles.content}>
        <KeyboardAwareScrollView>
          <View style={styles.signInForm}>
            <Logo />

            <View style={styles.form}>
              <View style={styles.formField}>
                <Label text="Email address" />
                <EmailInput />
              </View>

              <View style={styles.formField}>
                <Label text="Password" />
                <PasswordInput />
              </View>
            </View>

            <View style={styles.actionsContainer}>
              <Button text="Sign in" />

              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>

      <Text style={styles.footer}>
        Don't have an account? <Text style={styles.signUp}>Sign up</Text>
      </Text>
    </Wrapper>
  );
}
