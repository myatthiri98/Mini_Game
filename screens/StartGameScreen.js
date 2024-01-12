import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style= {styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2}/>
     <PrimaryButton>Reset</PrimaryButton>
     <PrimaryButton>Comfirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4CB9E7',
        borderRadius: 8,
        elevation: 4,
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#0F2167',
        borderBottomWidth: 2,
        color: '#0F2167',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign:'center',

    }
})