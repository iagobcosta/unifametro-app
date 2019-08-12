import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Gravatar} from 'react-native-gravatar'
import {  Divider } from 'react-native-elements'

class HeaderPerfil extends React.Component {
    render(){
        const options = { email: this.props.email, secure: false}
        return(
            <View style={styles.container}>
                <Text>Meu Perfil</Text>
                 <Gravatar options={options }  style={styles.avatar} />
                 <Text style={styles.nickname}>{this.props.name} </Text>
                <Divider style={{ backgroundColor: 'green' }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding:10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 40,
        
    },
    nickname:{
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        
    },
})

export default HeaderPerfil