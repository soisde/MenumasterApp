import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

export default function Login({navigation}){
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../../../assets/1.jpg')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Text style={styles.text}>Bem-vindo</Text>
          <Image style={styles.imgLogo} source={require('../../../assets/logoVivaBem.svg')} />
    
    
          <TextInput
            style={styles.input}
            placeholder="Email"
            require={true}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Senha"
    
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Senha')}
          >
          <Text style={styles.pass}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          
    
    
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>Acessar</Text>
          </TouchableOpacity>
    
          </ImageBackground>
    
        </View>
      );
}

const styles = StyleSheet.create({

    imgLogo: {
      width: 330,
      height: 125,
    },
  
    container: {
      flex: 1,
      backgroundColor: '#daa520',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    img: {
      width: 150,
      height: 150,
    },
  
    text: {
      fontSize: 30,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
  
    btn: {
      width: 250,
      height: 50,
      backgroundColor: '#000',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    btnText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    input: {
      width: 250,
      height: 40,
      backgroundColor: 'white',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginTop: 20,
    },
  
    pass: {
      fontSize: 15,
      color: 'gray',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      textDecorationLine: 'underline',
      cursor: 'pointer',
    },
  
  
  });
  
  