import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
         <Text style={styles.text}>Список завдань</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
      main: {
        paddingTop: 70,
        height: 120,
        backgroundColor: 'silver'
      },
      text: {
        color: 'red',
        textAlign: 'center'
      }
});
