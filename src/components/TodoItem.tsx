import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoProps } from '../type';

export default function TodoItem({ item }: { item: TodoProps }) {
  return (
    <View style={styles.item}>
      <Text style={[styles.text, item.completed && styles.completed]}>
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
