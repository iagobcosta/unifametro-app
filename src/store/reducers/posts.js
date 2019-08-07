import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Unifametro',
        email: 'unifametro@hotmail.com',
        image: require('../../../assets/imgs/images01.jpeg'),
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
        image: require('../../../assets/imgs/images02.png'),
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
        image: require('../../../assets/imgs/images03.png'),
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
        image: require('../../../assets/imgs/images04.png'),
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId){
                        if(post.comments){
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        }else{
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        }
        default: 
            return state
    }
}

export default reducer