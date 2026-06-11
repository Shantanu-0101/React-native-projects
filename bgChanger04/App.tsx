import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useState } from 'react';

function App() {
  const [randomBackground, setRandomBackground] = useState("#ffffff")

  const generateColor = () => {
    const hexRange ="0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
      
    }

    setRandomBackground(color)
  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonTxt}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },

  actionButton: {
    borderRadius: 12 ,
    backgroundColor: "#6A1B4D",
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 80

   },

   actionButtonTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    alignItems:'center',
    justifyContent: 'center',
    paddingLeft: 30
   }


});

export default App;
