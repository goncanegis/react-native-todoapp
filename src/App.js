import React, {useState} from 'react'
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Keyboard,
  View,
} from 'react-native'
import TodoInput from './TodoInput/TodoInput'
import TodoItem from './Todo/TodoItem'

const App = () => {
  const [todoList, setTodoList] = useState([
    {text: 'React Native öğren', completed: false},
    {text: 'Todo App yap!', completed: false},
  ])
  const [inputText, setInputText] = useState('')

  // Add a new todo item
  function addTodoItem(todoText) {
    setTodoList([...todoList, {text: todoText, completed: false}])
    Keyboard.dismiss()
    setInputText('')
  }

  // Delete todo
  function deleteTodoItem(todoId) {
    let tempArr = [...todoList]
    tempArr.splice(todoId, 1)
    setTodoList(tempArr)
  }

  // Complete todo
  function completeTodoItem(todoId) {
    let tempArr = [...todoList]
    tempArr[todoId].completed = true
    setTodoList(tempArr)
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.numberOfTasks}>{todoList.length}</Text>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TodoItem
              item={item}
              deleteFunction={() => deleteTodoItem(index)}
              completeFunction={() => completeTodoItem(index)}
            />
          )
        }}
      />
      <TodoInput
        onPress={addTodoItem}
        text={inputText}
        setInputText={setInputText}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#102027',
    padding: 16,
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  numberOfTasks: {
    fontSize: 36,
    color: '#FFA500',
  },
})

export default App
