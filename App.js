/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

function App() {
  const [item, getItem] = useState('');
  const [list, getList] = useState([]);

  function addList() {
    if (item) {
      list.push(item);
      console.log(list);
      getItem('');
    }
  }

  useEffect(() => {
    addList;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ScrollView>
          {list.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <CheckBox />
                <Text>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          onChangeText={getItem}
          value={item}
          placeholder="Tarefa"
        />
        <TouchableHighlight
          underlayColor="white"
          style={styles.inputButton}
          onPress={addList}>
          <Text style={styles.inputButtonText}>AD</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputField: {
    flexDirection: 'row',
    marginRight: 4,
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    flex: 1,
    height: 40,
    borderStyle: 'solid',
    borderColor: '#999',
    borderWidth: 1,
    alignContent: 'flex-end',
    alignSelf: 'stretch',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    // width: 200,
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    backgroundColor: '#2196F3',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  inputButtonText: {
    color: 'white',
  },
  list: {
    flex: 1,
    margin: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
