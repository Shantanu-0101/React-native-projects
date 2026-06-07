import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😁</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal: 8
  },

  container: {
    padding: 8,
    flexDirection: 'row'
  },

  card: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    height: 100,
    borderRadius: 4,
    margin: 7
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset:{
            width : 1,
            height : 1
    },
    shadowColor: 'red',
    shadowOpacity: 0.3,
    textShadowRadius: 2
  }
})