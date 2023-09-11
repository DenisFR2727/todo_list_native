import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useEffect, useState } from 'react';

export default function List({list, onDeleteTask}) {
  

  return (
    <View >
        <FlatList data={list} renderItem={({item}) => (
            <View style={styles.content_task}>
               <Text style={styles.text}>{item.name}</Text>
               <Button title="delete" style={styles.btn_delete} onPress={() => onDeleteTask(item.id)} />
            </View>
            
            
        )}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
     text: {
        padding: 10,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
     },
     content_task: {
        width: '90%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
     },
    
});
