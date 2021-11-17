import React, { useState } from 'react'
import { View, Text, TextInput, Button,StyleSheet } from 'react-native'

export type LoginProps = {
    onDoLogin: (username:string, password: string) => void
}

export const Login = (props: LoginProps) => {

    const [username, setUsername] = useState("usuario1")
    const [password, setPassword]  = useState("usuario1")

    return <View style={styles.container}>
        <Text>Usuário</Text>
        <TextInput style={styles.textInput}
            defaultValue={username}
            onChangeText={text => setUsername(text)}/>
        <Text>Senha</Text>
        <TextInput style={styles.textInput}
            secureTextEntry={true}
            defaultValue={password}
            onChangeText={setPassword}/>

        <Button title="Login" onPress={() => props.onDoLogin(username, password)}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10
    }
})