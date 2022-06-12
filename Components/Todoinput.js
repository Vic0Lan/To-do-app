import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

class TodoInput extends React.Component{
    state = {
        value: ""
    }
    onChangeTexthandler = (text) => {
        this.setState({value: text})
      }

    render(){
        return (
            <View style={styles.first_div}>
                <TextInput value={this.state.value} onChangeText={this.onChangeTexthandler} placeholder="Scrivi qualcosa!" placeholderTextColor="white" style={styles.Textinput} />
                <Button title="Invio" onPress={this.props.onAddTodo.bind(this, this.state.value)} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    first_div:{
        marginTop:100,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55
      },
    
      Textinput:{
        borderWidth: 3,
        borderColor:"rgb(26, 26, 255)",
        borderRadius: 15,
        width:"80%",
        paddingHorizontal: 7,
        paddingVertical: 4,
        color: "white"
      },
    
})
export default TodoInput;