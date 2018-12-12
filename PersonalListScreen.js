import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"

const Button = props => {
  const { onButtonPress, text, styleOverride } = props
  return (
    <TouchableOpacity style={[styles.button, styleOverride]} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const ListInput = props => {
  const { value, onChangeText, onAddItem, onClearItems } = props
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={val => onChangeText(val)}
        onSubmitEditing={onAddItem}
        autoFocus
      />
      <Button text="ADD" onButtonPress={onAddItem} />
      <Button
        text="Clear"
        onButtonPress={onClearItems}
        styleOverride={{ backgroundColor: "gray" }}
      />
    </View>
  )
}

export default class PersonalList extends Component {
  state = { inputValue: "", items: [] }

  addItem = () => {
    const { inputValue, items } = this.state
    if (inputValue) {
      const newItems = [...items, inputValue]
      this.setState({ items: newItems, inputValue: "" }) // Clear the inputValue (& TextField) on add item as well
    }
  }

  clearItems = () => this.setState({ inputValue: "", items: [] })

  render() {
    const { items, inputValue } = this.state
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ListInput
            value={inputValue}
            onAddItem={this.addItem}
            onClearItems={this.clearItems}
            onChangeText={value => this.setState({ inputValue: value })}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={items}
            renderItem={({ item, index }) => <Text style={styles.theValue}>{item}</Text>}
            keyExtractor={item => item}
            numColumns={3}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#447788"
  },
  theValue: {
    margin: 10,
    fontSize: 18,
    backgroundColor: "orange",
    flex: 1
  },
  input: {
    width: "50%",
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 5,
    fontSize: 12
  },
  inputRow: {
    flexDirection: "row"
  },
  button: {
    marginLeft: 10,
    justifyContent: "center",
    backgroundColor: "green"
  },
  buttonText: {
    margin: 5,
    color: "white",
    fontSize: 11
  }
})
