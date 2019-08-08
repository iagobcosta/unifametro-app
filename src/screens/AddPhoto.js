import React, { Component }from 'react'
import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert       
} from 'react-native'
import Styles from '../css/Styles'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'

const noUser = 'Você presica estar logado para adiciona imagens'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }
    

    pickImage = () => {
        if(!this.props.name){
            Alert.alert('Falha', noUser)
            return
        }

        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if(!res.didCancel){
                this.setState({ image: {uri: res.uri, base64: res.data}})
            }
        })
    }

    save = async () =>{
        if(!this.props.name){
            Alert.alert('Falha', noUser)
            return
        }

       this.props.onAddPost({
           id: Math.random(),
           nickname: this.props.name,
           email: this.props.email,
           image: this.state.image,
           comments: [{
               nickname: this.props.name,
               comment: this.state.comment
           }]
       })

       this.setState({ iamge: null, comment: ''})
       this.props.navigation.navigate('Feed')
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={Styles.button}>
                        <Text style={Styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder = 'Algum comentário para a foto?'
                        editable={this.props.name != null}
                        style={Styles.input} value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save} style={Styles.button}>
                        <Text style={Styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer:{
        width: '90%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image:{
        width: '100%' ,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'center'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)