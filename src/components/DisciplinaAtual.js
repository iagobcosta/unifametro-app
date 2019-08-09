import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

class DisciplinaAtual extends React.Component{
    render(){
        view = null
        if(this.props.valores){
            view = this.props.valores.map((item, index) => {
                return (
                    <View key={index} style={styles.body}>                        
                        <View style={styles.valores}>                       
                            <Card title = 'AV1' style={styles.nota1}>
                               <Text style={{fontWeight:'bold', fontSize: 30}}>{item.nota1} </Text>
                            </Card >

                            <Card title = 'AV2' style={styles.nota2}>
                                <Text style={{fontWeight:'bold', fontSize: 30}}>{item.nota2} </Text>
                            </Card >

                            <Card title = 'AV3' style={styles.nota3}>
                                <Text style={{fontWeight:'bold', fontSize: 30}}>{item.nota3} </Text>
                            </Card >

                            <Card title = 'Faltas' style={styles.faltas}>
                               <Text style={{fontWeight: 'bold', fontSize: 30}}>{item.faltas} </Text> 
                            </Card >

                        </View>
                        
                    </View>
                    
                )
            })
        }
        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1
    },    
    valores:{        
       
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',        
    },
    nota1:{        
        //marginHorizontal: 5,
        borderBottomWidth: 2,            
        borderColor: 'green'        
    },
    nota2:{       
        //marginHorizontal: 5,
        borderBottomWidth: 2,            
        borderColor: 'green'         
    },
    nota3:{       
        //marginHorizontal: 5,
        borderBottomWidth: 2,            
        borderColor: 'green'   
    },
    faltas:{        
        //marginHorizontal: 5,
        borderBottomWidth: 2,            
        borderColor: 'green' 
    }
})

export default DisciplinaAtual