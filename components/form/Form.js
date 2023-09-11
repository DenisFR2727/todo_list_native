import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function Form({addHandler}) {
      const [text, setValue] = useState("")

const onChange = (text) => {
    setValue(text);
}

  return (
    <View style={styles.form}>
         <TextInput onChangeText={onChange} style={styles.input}  placeholder="Напишіть завдання"/>
         <Button title='add' onPress={() => addHandler(text)} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
      form: {
         flexDirection: 'row',
         justifyContent: 'center',
         marginTop: 20
      },
      input: {
        width: '60%',
        borderBottomWidth: 1,
        marginHorizontal: 20,
        // textAlign: 'center'
      },
});
