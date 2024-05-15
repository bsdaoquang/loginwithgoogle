import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const App = () => {
  const handleLoginWithGoogle = async () => {
    console.log('fafaf');
  };

  return (
    <View style={[styles.container, styles.center]}>
      <TouchableOpacity
        onPress={handleLoginWithGoogle}
        style={[
          styles.button,
          styles.center,
          {
            width: '90%',
          },
        ]}>
        <Text style={[styles.textButton]}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: 'coral',
  },

  textButton: {
    color: 'white',
    fontWeight: '500',
  },
});
