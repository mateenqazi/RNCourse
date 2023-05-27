import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoalList] = useState([]);
  const goalInputHandler = (text) => {
    setEnteredText(text);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoal) => [
      ...currentGoal,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };

  console.log("goalList", goalList);
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={goalList}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(item) => {
            return (
              <View style={styles.goalList}>
                <Text style={styles.goalItem}>{item?.item?.text}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItem: {
    color: "white",
  },
});
