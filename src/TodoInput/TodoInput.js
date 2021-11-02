import React from 'react'
import {TouchableOpacity, View, Text, TextInput} from 'react-native'
import styles from './TodoInput.styles'

export default function TodoInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputBar}
        onChangeText={(text) => props.setInputText(text)}
        value={props.text}
        placeholder='Yapılacak...'
        placeholderTextColor='#808080'
      />
      <View style={styles.separator} />
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => props.onPress(props.text)}>
        <Text style={styles.submitBtnText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  )
}
