import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const InputField = ({ style, placeholder, value, keyboardType, maxLength, onChangeText, secureTextEntry }) => (
  <TextInput
    style={style}
    placeholder={placeholder}
    value={value}
    keyboardType={keyboardType}
    maxLength={maxLength}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
  />
);

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const Title = () => (
    <View>
      <Text style={styles.title}>Login</Text>
    </View>
  );

  const LoginButton = ({ onPress }) => (
    <View style={styles.buttonContainer}>
      <Button title="Login" onPress={onPress} />
    </View>
  );

  const handleSubmit = () => {
    if (expediente.length !== 6) {
      Alert.alert('El expediente debe tener solo 6 caracteres');
    } else if (password.length < 8) {
      Alert.alert('El password debe ser mayor o igual a 8 carácteres');
    } else {
      Alert.alert('Login exitoso');
    }
  };

  return (
    <View style={styles.container}>
      <Title />
      <InputField
        style={styles.input}
        placeholder="Expediente"
        value={expediente}
        keyboardType="numeric"
        maxLength={6}
        onChangeText={(text) => setExpediente(text)}
      />
      <InputField
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <LoginButton onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#D5DBDB',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default App;