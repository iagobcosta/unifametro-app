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
              <TextInput style={styles.input} 
                  placeholder="Matrícula ou E-mail"
                  placeholderTextColor="#FFF"
                  onChangeText={ email => this.setState({email})}
                  autoCapitalize="none"/>

              <TextInput style={styles.input} 
                  placeholder="Senha..."
                  placeholderTextColor="#FFF"                  
                  onChangeText={senha => this.setState({ senha })}
                  secureTextEntry={true}/> 
              <View style={styles.btnLogin}>              
                <TouchableOpacity  onPress={this.efetuaLogin}  >
                  <Text style={{color:'white', fontSize: 15}}>Login</Text>
                </TouchableOpacity>    
              </View>                                   
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
  input: {
      height: 40,
      width:300,      
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginTop:10,      
      
  },    
  mensagem: {
    marginTop: 5,
    color: '#e74c3c'
  },
  btnLogin:{
   paddingVertical:10,
   paddingHorizontal:40,
   marginTop:40,
   backgroundColor:'green',
   borderRadius:10,   
  },
});

const mapDispatchToProps = dispatch => {
  return{
    onLogin: user => dispatch(login(user))
  }
}

export default connect(null,mapDispatchToProps)(Login)