import React, { JSX } from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light';
    return(
        <View style={[styles.container, isDarkMode ? styles.darkBg : styles.lightBg]}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    whiteText: {
        color: '#FFFFFF'
    },

    darkText: {
        color: '#000000'
    },

    lightBg: { backgroundColor: '#ffffff' },

    darkBg: { backgroundColor: '#121212' }
})

export default AppPro;