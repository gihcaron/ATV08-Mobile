import { StyleSheet, Text, View, Image} from 'react-native';
import Card from './components/card';
import Header from './components/Header';
import { Overlay } from 'react-native-elements';

export default function Page() {
  return (
    <View style={styles.container}>
    
    <Header/>
 
    <Card/>

    <Card/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247,244,239,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
 });