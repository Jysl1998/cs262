import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import ToDoList from './ToDoList';

export default function App() {
  const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

 const addTodo = () => {
		if (value.length > 0) {
			setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
			setValue('');
		}
	};
  
const checkTodo = id => {
	setTodos(
		todos.map(todo => {
			if (todo.key === id) todo.checked = !todo.checked;
			return todo;
		})
	);
};

const deleteTodo = id => {
	setTodos(
		todos.filter(todo => {
			if (todo.key !== id) return true;
		})
	);
};

	return (
<View style={styles.container}>
			<Text style={styles.header}>Todo List</Text>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					multiline={false}
					placeholder="What do you want to do?"
					placeholderTextColor="#abbabb"
					value={value}
					onChangeText={value => setValue(value)}
				/>
				<TouchableOpacity onPress={() => addTodo()}>
					<Icon name="plus" size={30} color="white" style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			</View>
       <ScrollView style={{ width: '100%' }}>
              {todos.map(item => (
                <ToDoList
                  text={item.text}
                  key={item.key}
                  checked={item.checked}
                  setChecked={() => checkTodo(item.key)}
                  deleteTodo={() => deleteTodo(item.key)}
                />
              ))}
</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#11233C'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: '#F3F4CD',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'white',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		paddingLeft: 10,
		minHeight: '3%'
	}
});