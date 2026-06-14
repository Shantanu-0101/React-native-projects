import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Text } from 'react-native/';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, useEffect} from 'react';

import {setupPlayer, addTrack } from '../musicPlayerServices'
import { ActivityIndicator } from 'react-native/';
import MusicPlayer from './components/screens/MusicPlayer';

function App() {
  const [playerReady, setPlayerReady] = useState(false)

  async function setup() {
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])
  
  if (!playerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
