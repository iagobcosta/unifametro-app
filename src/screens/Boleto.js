import React from 'react'
import { View, Text, FlatList } from 'react-native'

import Boletos from '../components/boletos/Botetos'

class Boleto extends React.Component {
    state = {
        boletos:[{
            boleto1:[{
                id: Math.random(),
                vencimento: '10/06/2019',
                situacao: 'baixado',
                valor: 'R$ 599,00'
            }],
            boleto2:[{
                id: Math.random(),
                vencimento: '10/06/2019',
                situacao: 'aberto',
                valor: 'R$ 599,00'
            }],
            boleto3:[{
                id: Math.random(),
                vencimento: '10/06/2019',
                situacao: 'baixado',
                valor: 'R$ 599,00'
            }],
            boleto4:[{
                id: Math.random(),
                vencimento: '10/06/2019',
                situacao: 'aberto',
                valor: 'R$ 599,00'
            }],
            boleto5:[{
                id: Math.random(),
                vencimento: '10/06/2019',
                situacao: 'baixado',
                valor: 'R$ 599,00'
            }],
            boleto6:[{
                id: Math.random(),
                vencimento: '10/06/2019',
                situacao: 'vencido',
                valor: 'R$ 599,00'
            }],

            
        }]
        
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.boletos}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item}) => 
                        <Boletos key={item.id} {...item} />  } />
            </View>
        )
    }
}

export default Boleto