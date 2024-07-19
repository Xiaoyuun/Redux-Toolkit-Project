/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './src/counterSlice';
import { View, Text, Button } from 'react-native';

const App = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Redux Example</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment +" onPress={() => dispatch(increment())} />
      <Button title="Decrement -" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default App;