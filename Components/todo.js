import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Todo = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={props.deleteTodo}>
          <View style={styles.listview}>

               <Text style={styles.todostyle}> {props.title} </Text>
 
            
          </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
todostyle:{
    color: "white",
    borderWidth:3,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal:1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "rgb(26, 26, 255)"
    },

    listview:{
    flexDirection: "column",
    alignItems: "center",  
    }

});

export default Todo;