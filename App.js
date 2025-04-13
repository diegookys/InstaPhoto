import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function LoginScreen(){
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/iconeDaCamera.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuário ou email"
        placeholderTextColor="#A3A3A3"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#A3A3A3"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFFFFF', // cor branca
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 20,
  },
  logo:{
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input:{
    width:'90%',
    height: 55,
    backgroundColor:'#F3F3F3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 17,
  },
  button:{
    width:'90%',
    height: 55,
    backgroundColor:'#0099FF',
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10,
  },
  buttonText:{
    color:'#FFFFFF',
    fontWeight:'bold',
  },
  forgotContainer: {
    width:'90%',
    alignItems:'flex-end',
    marginTop: 3,
  },
  forgotText:{
    color:'#0099FF',
    marginTop: 15,
    fontSize: 13,
  },
});