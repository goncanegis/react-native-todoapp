import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from './TodoItem.styles'

export default function TodoItem(props) {
  // Update style according to props
  let style = props.item.completed
    ? {
        fontSize: 18,
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#37474F',
        color: '#808080',
        textDecorationLine: 'line-through',
      }
    : {
        fontSize: 18,
        borderRadius: 7,
        padding: 8,
        backgroundColor: '#7DA453',
        color: '#ffffff',
        textDecorationLine: 'none',
      }

  return (
    <TouchableOpacity
      onPress={() => props.completeFunction()}
      onLongPress={() => props.deleteFunction()}
      style={{...styles.todoItem, style}}>
      <Text style={style}>{props.item.text}</Text>
    </TouchableOpacity>
  )
}
