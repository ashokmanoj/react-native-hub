import React, { useState } from "react";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const theme = useTheme();

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
            }}
            style={styles.logo}
          />
          <Text variant="headlineMedium" style={styles.title}>
            {isSignUp ? "Create Account" : "Welcome Back"}
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            {isSignUp
              ? "Join us today and get started!"
              : "Sign in to continue your journey."}
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              label="Email"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              mode="outlined"
              style={styles.input}
              left={<TextInput.Icon icon="email" />}
            />
            <TextInput
              label="Password"
              secureTextEntry
              autoCapitalize="none"
              mode="outlined"
              style={styles.input}
              left={<TextInput.Icon icon="lock" />}
            />
          </View>

          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Button mode="text" onPress={handleSwitchMode}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don’t have an account? Sign Up"}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  title: {
    fontWeight: "600",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    color: "#6b6b6b",
    marginBottom: 25,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContent: {
    paddingVertical: 6,
  },
});
