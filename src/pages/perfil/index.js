import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground, ScrollView, Modal } from 'react-native';

export default function Funcionarios({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleEditPress = () => {
        setModalVisible(true);
    };

    const handleNavigate = () => {
        setModalVisible(false);
        navigation.navigate('AnotherScreen'); // Replace 'AnotherScreen' with the actual screen name you want to navigate to
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundo4.png')} style={styles.background}>
                <View style={styles.header}>
                    <Image style={styles.profileImage} source={require('../../../assets/fundo4.png')} />
                    <View style={styles.headerText}>
                        <Text style={styles.userName}>Usuario</Text>
                        <Text style={styles.userRole}>Administrativo</Text>
                    </View>
                    <TouchableOpacity style={styles.menuButton}>
                        <Image source={require('../../../assets/fundo4.png')} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.welcomeText}>Seja bem vindo Usuario</Text>
                <Text style={styles.sectionTitle}>Funcionarios</Text>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholder="Pesquisar" />
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Filtro</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.messagesContainer}>
                    {Array(4).fill().map((_, index) => (
                        <View key={index} style={styles.messageCard}>
                            <Image style={styles.messageIcon} source={require('../../../assets/fundo4.png')} />
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Nome funcionário</Text>
                                <Text style={styles.messageTitle}>Função funcionário</Text>
                                <Text style={styles.messageStatus}>Status funcionário</Text>
                            </View>
                            <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
                                <Image source={require('../../../assets/fundo4.png')} style={styles.editIcon} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image source={require('../../../assets/fundo4.png')} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image source={require('../../../assets/fundo4.png')} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image source={require('../../../assets/fundo4.png')} style={styles.footerIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Detalhes do Funcionário</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={handleNavigate}>
                            <Text style={styles.modalButtonText}>Ir para Outra Tela</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    background: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 40,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    headerText: {
        flex: 1,
        marginLeft: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userRole: {
        fontSize: 14,
        color: '#666',
    },
    menuButton: {
        padding: 10,
    },
    menuIcon: {
        width: 24,
        height: 24,
    },
    welcomeText: {
        marginTop: 20,
        fontSize: 16,
    },
    sectionTitle: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 20,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    filterButton: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 10,
    },
    filterText: {
        fontSize: 16,
    },
    messagesContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    messageCard: {
        width: '90%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    messageContent: {
        flex: 1,
    },
    messageName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    messageTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    messageStatus: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    editButton: {
        padding: 10,
    },
    editIcon: {
        width: 24,
        height: 24,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    footerButton: {
        padding: 10,
    },
    footerIcon: {
        width: 24,
        height: 24,
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: '#ff9900',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fabIcon: {
        fontSize: 24,
        color: '#fff',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalButton: {
        backgroundColor: '#ff9900',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
