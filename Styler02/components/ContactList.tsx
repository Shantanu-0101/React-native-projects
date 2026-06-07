import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

export default function ContactList() {
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
      <Text style={styles.headerText}>ContactList</Text>
      <ScrollView
      
      style={styles.container}
      scrollEnabled ={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source ={{
                    uri : imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
                
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headerText: {
        fontSize: 24
    },

    container: {
        paddingHorizontal:16,
        marginBottom: 4

    },

    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10

    },

    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 /2,
        marginRight:14
    },

    userName: {
        fontSize: 16,
        fontWeight : '600',
        color : '#FFF'
    },

    userStatus: {
        fontSize: 12,

    }

})