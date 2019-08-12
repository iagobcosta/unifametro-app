import React, { Component }from 'react'
import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity         
} from 'react-native'

import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import HeaderPerfil from '../components/HeaderPerfil'
import Icon from 'react-native-vector-icons/FontAwesome'




class Profile extends Component {

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render(){
        
        return(            
            <View style={styles.container}>
               
                <HeaderPerfil email={this.props.email} name={this.props.name}/>
            
                <View style={styles.containerEmail}>
                    <Icon name="envelope" size={20} color={'green'}  />
                    <Text style={styles.email}>
                    
                        {this.props.email}                    
                    </Text> 
                </View>

                <View style={styles.containerCurso}>  
                <Icon name="graduation-cap" size={20} color={'green'}  />                 
                    <Text style={styles.email}>                    
                        {this.props.curso}                    
                    </Text> 
                </View>

                <TouchableOpacity onPress={this.logout} style={styles.button}>
                    <Text style={styles.buttomText}>Sair</Text>
                    <Icon name="sign-out" size={20} color={'green'}  /> 
                </TouchableOpacity>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    
    
    email:{
        margin: 15,
        fontSize: 13,
    },
    containerEmail:{
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#BBB',
       
    },
    containerCurso:{
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#BBB',
    },
    buttomText:{
        fontSize: 15,
        color: 'black'
    },
    button:{
        alignItems: 'center',
        width: '50%',
        margin: 50,      
        paddingHorizontal: 5,       
        marginHorizontal: 100,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        borderTopWidth: 3,
        borderRadius:10,             
        borderColor: 'green'
        
       
    }

})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
        curso: user.curso,

    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)