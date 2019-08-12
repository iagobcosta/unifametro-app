import React, { Component } from 'react';
import { Card } from 'react-native-elements'
import { View, Text,ScrollView, StyleSheet } from 'react-native';
import SemestreAtual from '../components/notasFaltas/SemestreAtual'



class NotasEFaltas extends Component {
    state = {
        disciplina1:[{
            nome: 'CONTABILIDADE GERAL',
            valores1:[{
                nota1: '5.3',
                nota2: '8.5',
                nota3: '0',
                faltas: '5%'
            }]
        }],
        disciplina2:[{
            nome: 'ADMINISTRAÇÃO FINANCEIRA E ORÇAMENTÁRIA',
            valores2:[{
                nota1: '5.3',
                nota2: '8.5',
                nota3: '0',
                faltas: '5%'
            }]
        }],
        disciplina3:[{
            nome: 'LEITURA E PRODUÇÃO TEXTUAL',
            valores3:[{
                nota1: '5.3',
                nota2: '8.5',
                nota3: '0',
                faltas: '5%'
            }]
        }],
        disciplina4:[{
            nome: 'INGLÊS INSTRUMENTAL',
            valores4:[{
                nota1: '5.3',
                nota2: '8.5',
                nota3: '0',
                faltas: '5%'
            }]
        }],
        disciplina5:[{
            nome: 'GERÊNCIA DE PROJETOS',
            valores5:[{
                nota1: '5.3',
                nota2: '8.5',
                nota3: '0',
                faltas: '5%'
            }]
        }],
    }
  render() {
    return(
        <View style={styles.container}>
            <Card  title = 'Disciplinas matriculadas'  titleStyle={{fontSize:20}}></Card>       
            <ScrollView>
                <SemestreAtual disciplina={this.state.disciplina1} />
                <SemestreAtual disciplina={this.state.disciplina2} />
                <SemestreAtual disciplina={this.state.disciplina3} />
                <SemestreAtual disciplina={this.state.disciplina4} />
                <SemestreAtual disciplina={this.state.disciplina5} />
            </ScrollView>  
              
        </View>
    ) 
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10
    },
    titile:{
       
    }
})

export default NotasEFaltas