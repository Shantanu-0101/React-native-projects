import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source= {{
            uri: 'https://wallpapers.com/images/hd/david-goggins-image-with-quote-wd1q8ny2msv3645b.jpg'
        }}

        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>David Goggins</Text>
            <Text style={styles.cardLabel}>Stay Hard</Text>
            <Text style={styles.cardDescription}>“When your mind is telling you that you are done, that you are exhausted, that you cannot possibly go any further, you are actually 40% done"</Text>
            <Text style={styles.cardFooter}>Can't Hurt Me</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal: 8
  },

  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 5,
  },
  cardElevated: {
    backgroundColor: '#A9A9A9',
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1
    }
  },

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,

  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },

  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
     fontSize: 14,
     marginBottom: 6,
  },
  cardDescription: {
    color: '#000000',
     fontSize: 12,
     marginBottom: 12,
     flexShrink: 1,
     marginTop: 6
  },
  cardFooter: {
    color: '#000000'
  }

  
})