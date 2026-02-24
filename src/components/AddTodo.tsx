import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addTodo } from '../slices/todo-slice';




export default function AddTodo() {
    const items = useAppSelector((state) => state.todo.todos);
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    function handleAdd() {
        dispatch(addTodo({ id: items.length, title: text, completed: false }));
        setText('');
    }
    
    return (
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Add new todo..."
            value={text}
            onChangeText={setText}
        />
        <Button title="Add" onPress={() => handleAdd()} disabled={text.trim() === ''} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    borderBottomWidth: 1,
    marginRight: 8,
    padding: 8,
  },
});
