import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../../constants/colors';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Leche' style={styles.textInput} />
        <Button title='ADD' />
      </View>

      <View style={styles.items}>
        <View style={styles.item}>
          <Text>Leche</Text>
          <Button title='X' />
        </View>

        <View style={styles.item}>
          <Text>Atún</Text>
          <Button title='X' />
        </View>

        <View style={styles.item}>
          <Text>Cebolla</Text>
          <Button title='X' />
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: '#05E895',
  },
  textInput: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: '#ececec',
  },
  item: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: Colors.black,
    borderWidth: 1,
    width: '100%',
  },
});
