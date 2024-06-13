import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native';

export default function Notifica({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundo5.png')} style={styles.background}>
                <View style={styles.header}>
                    <Image style={styles.profileImage} source={require('../../../assets/1.jpg')} />
                    <View style={styles.headerText}>
                        <Text style={styles.userName}>Usuario</Text>
                        <Text style={styles.userRole}>Administrativo</Text>
                    </View>
                    <TouchableOpacity style={styles.menuButton}>
                        <Image source={require('../../../assets/1.jpg')} style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.welcomeText}>Seja bem vindo Usuario</Text>
                <Text style={styles.sectionTitle}>Mensagens</Text>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput} placeholder="Pesquisar" />
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterText}>Filtro</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.messagesContainer}>
                    {Array(4).fill().map((_, index) => (
                        <View key={index} style={styles.messageCard}>
                            <Text style={styles.messageName}>Nome pessoa</Text>
                            <Text style={styles.messageTitle}>Titulo mensagem</Text>
                            <Text style={styles.messagePreview}>Preview mensagem</Text>
                            <View style={styles.messageInfo}>
                                <Text style={styles.messageDate}>Data: 14/08</Text>
                                <Text style={styles.messageId}>Id: 523</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                {/* <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image source={require('../../../assets/1.jpg')} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image source={require('../../../assets/1.jpg')} style={styles.footerIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerButton}>
                        <Image source={require('../../../assets/1.jpg')} style={styles.footerIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity> */}
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
    messagePreview: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    messageInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    messageDate: {
        fontSize: 12,
        color: '#666',
    },
    messageId: {
        fontSize: 12,
        color: '#666',
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
});


