import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
const GoalInput = ({ onAddGoal, showModal, onCancel }) => {
  const [enteredText, setEnteredText] = useState("");
  const goalInputHandler = (text) => {
    setEnteredText(text);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredText);
    setEnteredText("");
  };
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.imageContainer}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Cancel" onPress={onCancel} color="#f31272" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 8,
    borderRadius: 6,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonStyle: {
    width: 100,
    marginHorizontal: 8,
  },
  imageContainer: {},
});
