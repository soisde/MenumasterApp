import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

export default function Home({navigation}){
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
               
                <ImageBackground source={require('../../../assets/fundo3.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Image style={styles.img} source={require('../../../assets/botao-home.png')} />
                <Text style={styles.text}>Home</Text>
              
          
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate('Perfil')}
                >
                  <Text style={styles.btnText}>Ir Para o Perfil</Text>
                </TouchableOpacity>
          
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={styles.btnText}>Voltar</Text>
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
  
  