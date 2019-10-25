import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, Image, Text } from 'react-native';
import styles from '../Login/styles'
import Button from '../../components/Button'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function Perfil(props) {
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        getPermissions()
    }, [])

    async function getPermissions() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                console.log('Precisamos desta permissão para tudo funcionar corretamente')
            }
        }
    }
    async function pickImage() {
        var result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3]
        })
        if (result.cancelled === false) {
            setAvatar(result.uri)
        }

        setAvatar(result.uri)
    }
    async function pickImageWithCamera() {
        var result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3]
        })

        if (result.cancelled === false) {
            setAvatar(result.uri)
        }

        setAvatar(result.uri)
    }
    function deletePick() {
        setAvatar('')
    }

    function imagem() {
        console.log(avatar)
        Alert.alert(
            'Mensagem',
            'Você deseja utilizar a câmera ou a galeria?',
            [{ text: 'Excluir', onPress: () => deletePick() },
            { text: 'Câmera', onPress: () => pickImageWithCamera() },
            { text: 'Galeria', onPress: () => pickImage() }]
        )
    }

    return (
        <View style={styles.container}>
            {avatar.length > 0 && <Image source={{ uri: avatar }} style={{ width: 100, height: 100, borderRadius: 50 }} />}
            <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TextInput placeholder="Nome completo" style={{
                    width: 250,
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                    color: '#007bff'
                }} />
                <TextInput placeholder="Digite seu sobrenome" style={{
                    width: 250,
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                    fontSize: 25,
                    color: '#007bff'
                }} />
                <View style={{ flexDirection: "row" }}>
                    <Button texto='Voltar' onPress={() => props.navigation.goBack()}></Button>
                    <Button texto='Imagem' onPress={() => imagem()}></Button>
                </View>

            </View>
        </View>
    )
}
