import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { TodoListProps } from '../type';



export default function TodoList({ todos }: TodoListProps) {
  return (
    <FlatList
      style={{ paddingHorizontal: 20 }}
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
}
