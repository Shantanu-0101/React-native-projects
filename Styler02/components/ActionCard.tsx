import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function ActionCard() {
    function openwebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 -ES12
            </Text>
        </View>
        <Image  
        source={{
            uri: 'https://wallpapers.com/images/hd/iron-man-tony-stark-hero-pose-76esc8rqw92esynq.jpg'
        }}

        style={styles.cardImage}
        />

        <View style={styles.cardbodyContainer}>
            <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime impedit magnam voluptatum voluptate maiores dolorem animi ut optio cum nemo?</Text>
        </View>

        <View style={styles.cardfooterContainer}>
            <TouchableOpacity
            onPress={() => openwebsite('https://shantanupanchal.hashnode.dev/i-trained-a-word2vec-model-on-friends-tv-show-dialogues?utm_source=hashnode&utm_medium=feed')}>
                <Text style={styles.socialLinks}>Read More...</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => openwebsite('https://shantanupanchal.hashnode.dev/i-trained-a-word2vec-model-on-friends-tv-show-dialogues?utm_source=hashnode&utm_medium=feed')}>
                <Text style={styles.socialLinks}>Follow Us</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },

    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 5
    },

    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height : 1
        },
        shadowOpacity: 0.4,
        shadowColor: '#333'
    },

    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },

    headerText: {
        color : '#000',
        fontSize: 16,
        fontWeight: '600'
    },

    cardImage: {
        height: 190
    },

    cardbodyContainer: {
        padding: 10,

    },

    cardfooterContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },

    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6
    }
})