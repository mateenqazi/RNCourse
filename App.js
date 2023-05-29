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
import { StatusBar } from "expo-status-bar";

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
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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
});
