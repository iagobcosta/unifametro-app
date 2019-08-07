import React, {Fragment} from 'react';
import {  
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';

import Styles from '../css/Styles'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'




class Login extends React.Component{
 
  
    state = { 
      name: 'Iago Barbosa', 
      email:'', 
      senha:'',
    }
  

  efetuaLogin = () => {
      this.props.onLogin({ ...this.state })
      this.props.navigation.navigate('Profile') 
    }

  render(){
    return(
      <Fragment >
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('../../assets/imgs/img2.jpg')} style={{width: '100%', height: '100%'}}>  
           <View style={styles.form}>     
              <Image source={require('../../assets/imgs/logo.png')} style={styles.logo}/>   
              <TextInput style={Styles.input} 
                  placeholder="Matrícula ou E-mail"
                  placeholderTextColor="#FFF"
                  onChangeText={ email => this.setState({email})}
                  autoCapitalize="none"/>

              <TextInput style={Styles.input} 
                  placeholder="Senha..."
                  placeholderTextColor="#FFF"                  
                  onChangeText={senha => this.setState({ senha })}
                  secureTextEntry={true}/> 
                            
                <TouchableOpacity  
                  onPress={this.efetuaLogin}
                  style={Styles.button}>
                  <Text style={Styles.buttomText}>Login</Text>
                </TouchableOpacity>    
                                          
            </View> 
            </ImageBackground>  
        
     
    </Fragment>
    )
  }

}


const styles = StyleSheet.create({
 
  form: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',        
    
  },
  mensagem: {
    marginTop: 5,
    color: '#e74c3c'
  }
  
});

const mapDispatchToProps = dispatch => {
  return{
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null,mapDispatchToProps)(Login)