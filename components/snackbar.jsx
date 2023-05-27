import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Snackbar } from "react-native-paper";

const SnackBar = ({ message, visible, onDismissSnackBar }) => {
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
        style={{
          backgroundColor: "yellow",
          color: "white",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          {message}
        </Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default SnackBar;
