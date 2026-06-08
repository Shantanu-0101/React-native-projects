import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';

export default function ElevatedProfiles() {
    const contacts = [
        {
            uid: 1,
            name: 'Shantanu Panchal',
            status: 'Just a Disciplined Man',
            imageUrl: 'https://avatars.githubusercontent.com/u/187155461?v=4'
        },
        {
            uid: 2,
            name: 'Rahul Gore',
            status: 'Alaways happy Person',
            imageUrl: 'https://avatars.githubusercontent.com/u/153459846?s=130&v=4'
        },
        {
            uid: 3,
            name: 'Nishant Hawade',
            status: 'Sanskari Baccha',
            imageUrl: 'https://avatars.githubusercontent.com/u/15269375?s=130&v=4'
        },
        {
            uid: 4,
            name: 'Somnath Joshi',
            status: 'Bhim ka Baccha',
            imageUrl: 'https://avatars.githubusercontent.com/u/229137320?s=130&v=4'
        },
        {
            uid: 5,
            name: 'Omkar Joshi',
            status: 'A Hardcore Gamer',
            imageUrl: 'https://avatars.githubusercontent.com/u/16989377?s=130&v=4'
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>ElevatedProfiles</Text>
      <ScrollView
      horizontal={true}
      style={styles.container}
      >
        {contacts.map(({uid, imageUrl}) =>(
            <View key={uid} style={styles.useCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}>

                </Image>
            </View>
        ))} 
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText: {
        fontSize:24
    },

    container: {
        paddingHorizontal:16,
        marginBottom: 4
    },

    useCard:{},

    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60 /2,
        marginRight:14
    },




})