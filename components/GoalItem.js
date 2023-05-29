import React from "react";
import { Text, View, StyleSheet } from "react-native";
const GoalItem = (props) => {
  const { text } = props;
  console.log("text", text);
  return (
    <View style={styles.goalList}>
      <Text style={styles.goalItem}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
