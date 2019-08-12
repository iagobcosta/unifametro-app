import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

 class Boleto extends React.Component {
     
    render(){ 
        view = null   
        if(this.props.boleto){
            view = this.props.boleto.map((item , index) => {
                if(item.situacao === 'aberto'.trim()){
                    return (                    
                        <View style={[styles.container, styles.boletoAberto]} key={index}>
                                <Text>
                                    Data de Vencimento: {item.vencimento}
                                </Text>
            
                                <Text>
                                   Situação: {item.situacao}
                                </Text>
            
                                <Text>
                                   Valor: {item.valor}
                                </Text>
                                <Divider style={{ height: 1, marginTop: 5}}  />
                            </View>
                    )
                }
                if(item.situacao === 'vencido'.trim()){
                    return (                    
                        <View style={[styles.container, styles.boletoVencido]} key={index}>
                                <Text>
                                    Data de Vencimento: {item.vencimento}
                                </Text>
            
                                <Text>
                                   Situação: {item.situacao}
                                </Text>
            
                                <Text>
                                   Valor: {item.valor}
                                </Text>
                                <Divider style={{ height: 1, marginTop: 5}}  />
                            </View>
                    )
                }
                else{
                    return (                    
                        <View style={styles.container} key={index}>
                                <Text>
                                    Data de Vencimento: {item.vencimento}
                                </Text>
            
                                <Text>
                                   Situação: {item.situacao}
                                </Text>
            
                                <Text>
                                   Valor: {item.valor}
                                </Text>
                                <Divider style={{ height: 1, marginTop: 5}}  />
                            </View>
                    )
                }
                
            })
        }
        return (
            <View style={{flex:1}}>
                {view}
            </View>
         )
        
        
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderLeftWidth: 3,
        margin: 10,
        paddingLeft: 8,
        borderColor: 'green',
        
    },
    boletoAberto:{
        borderColor: 'yellow'
    },
    boletoVencido:{
        borderColor: 'red'
    }
})

export default Boleto