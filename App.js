import { useState } from 'react';
import uuid from 'react-native-uuid';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Form from './components/form/Form';
import Header from './components/header/Header';
import List from './components/tasksList/List';

export default function App() {

const [stateValue, setStateValue] = useState([])


const addHandler = (text) => {
     const newTask = {
          name: text,
          id: uuid.v4()
     }
     setStateValue((list) => {
      return [
        ...list,
        newTask,
        
      ]
     });
}

const deleteHandler = (taskId) => {
  setStateValue((list) => list.filter((item) => item.id !== taskId));
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'grey' }}>
        <Header />
        <Form addHandler={addHandler}/>
        <List list={stateValue} onDeleteTask={deleteHandler}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
