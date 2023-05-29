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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (enteredText) => {
    setGoalList((currentGoal) => [
      ...currentGoal,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endGoalInputHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoalList((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  };

  const addGoalInputHandler = () => {
    setShowModal(true);
  };

  const endGoalInputHandler = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={addGoalInputHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        showModal={showModal}
        onCancel={endGoalInputHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={goalList}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(item) => (
            <GoalItem
              text={item?.item?.text}
              onDeleteItem={deleteGoalHandler}
              id={item?.item?.id}
            />
          )}
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
