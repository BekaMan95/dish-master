import React, { use } from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import { TodoProps } from '../type';
import { useSelector } from 'react-redux';


// const todos: TodoProps[] = [
//   { id: 1, title: 'Buy groceries', completed: false },
//   { id: 2, title: 'Walk the dog', completed: true },
//   { id: 3, title: 'Read a book', completed: false },
// ];

export default function MainScreen() {
  const items = useSelector((state: { todo: { todos: TodoProps[] } }) => state.todo.todos);

  return (
    <View style={styles.container}>
        <AddTodo />
        <TodoList todos={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    gap: 30,
  },
});
