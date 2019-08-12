import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BoletoComp from './BoletoComp'

class Boletos extends React.Component {
    render(){        
            return (
                <View style={styles.container}>
                    <BoletoComp boleto={this.props.boleto1} />
                    <BoletoComp boleto={this.props.boleto2} />
                    <BoletoComp boleto={this.props.boleto3} />
                    <BoletoComp boleto={this.props.boleto4} />
                    <BoletoComp boleto={this.props.boleto5} />
                    <BoletoComp boleto={this.props.boleto6} />
                    <BoletoComp boleto={this.props.boleto7} />
                    <BoletoComp boleto={this.props.boleto8} />
                    <BoletoComp boleto={this.props.boleto9} />
                </View>
            )
    }     
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default Boletos
