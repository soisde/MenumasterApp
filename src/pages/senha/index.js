import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

export default function Senha({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#9bc53d' }}>
           <ImageBackground source={require('../../../assets/fundo7.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Text style={styles.text}>Recuperação de Senha</Text>
          <Image style={styles.imgLogo} source={require('../../../assets/logoVivaBem.svg')} />
    
    
          <TextInput
            style={styles.input}
            placeholder="Email"
            require={true}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Cpf"
    
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.btnText}>Enviar</Text>
          </TouchableOpacity>
    
          </ImageBackground>
    
        </View>
      );
}

const styles = StyleSheet.create({
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
  
   
  });
  
  