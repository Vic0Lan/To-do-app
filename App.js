import { StatusBar } from 'expo-status-bar';
import React, {} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Todo from './Components/todo';
import TodoInput from './Components/Todoinput';


export default class App extends React.Component {
  state = {
    todolist: [],
  }


  addtodohandler = (value) =>  {
    if (value.trim() === ""){
      alert("Scrivi qualcosa.")
    }
    else{
      this.setState(prestate => {
      return {
        todolist: prestate.todolist.concat({value: value, id: Math.random().toString()})
      }
    })
  }
    this.setState({value: ""})
  }

  removetodohandler = (id) => {
    this.setState({
      todolist: this.state.todolist.filter(todo => todo.id !== id )
    })
  }

  render(){
    return (
    <View style={styles.body}>
      <TodoInput onAddTodo={this.addtodohandler} />

      <View style={styles.label}>
        <Text style={styles.labeltextstyle}>Clicca sui promemoria per rimuoverli!</Text>
      </View>

      <FlatList
      data={this.state.todolist}  
      renderItem={item => <Todo deleteTodo={() => this.removetodohandler(item.item.id)} title={item.item.value} /> } />
       
    </View>
  );
  }
  
}

const styles = StyleSheet.create({
  body: { 
    flex: 1,
    backgroundColor: "rgb(20, 20, 20)",
  },
 label:{
    borderWidth:3,
    flexDirection: 'column',
    alignItems: "center",
    marginHorizontal: 55,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 2,
    paddingVertical: 7,
    borderRadius: 15,
    borderColor: "rgb(26, 26, 255)",
  },
  labeltextstyle: {
    color: "white"
  }
});
