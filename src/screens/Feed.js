import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Unifametro',
            email: 'unifametro@hotmail.com',
            image: require('../../assets/imgs/images01.jpeg'),
            comments:[{
                nickname:'Rafael Pereira',
                comment: 'Show de bola...'
            },{
                nickname: 'Ana Silvia',
                comment: 'Muito bom isso.'
            }]
        },{
            id: Math.random(),
            nickname: 'Unifametro',
            email: 'unifamtro@hotmail.com',
            image: require('../../assets/imgs/images02.png'),
            comments:[{
                nickname:'Bruno Nogueira',
                comment: 'Nutrição é massa!'
            },{
                nickname: 'George Gomes',
                comment: 'Quero fazer parte.'
            }]
        },{
            id: Math.random(),
            nickname: 'Unifametro',
            email: 'unifamtro@hotmail.com',
            image: require('../../assets/imgs/images03.png'),
            comments:[{
                nickname:'Felipe norões',
                comment: 'Vou me cadastrar!'
            },{
                nickname: 'George Gomes',
                comment: 'Massa.'
            }]
        },{
            id: Math.random(),
            nickname: 'Unifametro',
            email: 'unifamtro@hotmail.com',
            image: require('../../assets/imgs/images04.png'),
            comments:[{
                nickname:'Felipe norões',
                comment: 'Vou me cadastrar!'
            },{
                nickname: 'George Gomes',
                comment: 'Qual data?.'
            },{
                nickname: 'Matheus Costa',
                comment: 'Quando começa?.'
            }]
        }]
    }

    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={ item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'

    }
})

export default Feed