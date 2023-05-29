import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
const GoalItem = (props) => {
  console.log("props", props);
  const { text, onDeleteItem, id } = props;
  return (
    <View style={styles.goalList}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: "white",
    padding: 8,
  },
});
