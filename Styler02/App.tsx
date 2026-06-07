import { View, Text, ScrollView } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import Flatcards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import { StyleSheet } from 'react-native'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards /> 
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}



export default App;