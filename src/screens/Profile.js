import React, { Component }from 'react'
import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity         
} from 'react-native'
import Styles from '../css/Styles'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'

import {Gravatar} from 'react-native-gravatar'

class Profile extends Component {

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render(){
        const options = { email: this.props.email, secure: true}
        return(
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.emial}>{this.props.email}</Text>
                <TouchableOpacity onPress={this.logout} style={Styles.button}>
                    <Text style={Styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    avatar:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 100,
        backgroundColor: '#3D3D3D'
    },
    nickname:{
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email:{
        marginTop: 20,
        fontSize: 25
    
    
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    }

})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)