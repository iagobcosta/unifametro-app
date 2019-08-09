import React from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'
import ProgressCircle from 'react-native-progress-circle'

import SemestreHist from '../components/SemestreHist'



class Historico extends React.Component {
    state = {
        media: 7.75,
        
            semestre1: [
                {
                    id: Math.random(),
                    periodo: '2016.1',
                    cr: '7.65',
                    disciplina1: [{
                        nome: 'GESTÃO EMPREENDEDORA',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }],
                    disciplina2: [{
                        nome: 'LÓGICA DA MATEMÁTICA',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }],
                    disciplina3: [{
                        nome: 'LÓGICA DE PROGRAMAÇÃO',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }]
                  
                }
            ],
            semestre2: [
                {
                    id: Math.random(),
                    periodo: '2016.2',
                    cr: '7.85',
                    disciplina1: [{
                        nome: 'METODOLOGIA DO TRABALHO CIENTÍFICO',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }],
                    disciplina2: [{
                        nome: 'ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }],
                    disciplina3: [{
                        nome: 'ESTRUTURAS DE DADOS',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }]
                  
                }
            ],
            semestre3: [
                {
                    id: Math.random(),
                    periodo: '2017.1',
                    cr: '6.75',
                    disciplina1: [{
                        nome: 'ÉTICA, COMPUTADOR E SOCIEDADE',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '5%'
                    }],
                    disciplina2: [{
                        nome: 'MATEMÁTICA DISCRETA',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '0'
                    }],
                    disciplina3: [{
                        nome: 'PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO',
                        situacao: 'AP',
                        nota: '8,0',
                        faltas: '15%'
                    }]
                  
                }
            ],
            semestre4: [
                {
                    id: Math.random(),
                    periodo: '2017.2',
                    cr: '7.41',
                    disciplina1: [{
                        nome: 'DIREITO EMPRESARIAL',
                        situacao: 'AP',
                        nota: '10,0',
                        faltas: '0%'
                    }],
                    disciplina2: [{
                        nome: 'FUNDAMENTOS DE BANCO DE DADOS',
                        situacao: 'AP',
                        nota: '5,3',
                        faltas: '5%'
                    }],
                    disciplina3: [{
                        nome: 'LINGUAGEM DE PROGRAMAÇÃO ORIENTADA A OBJETOS',
                        situacao: 'AP',
                        nota: '7,5',
                        faltas: '10%'
                    }]
                  
                }
            ],
          
    }
    
  render() {
      
    return (
        <View style={styles.container}>
            <Card title = 'CR Global' containerStyle={{alignItems: 'center'}}>
                <ProgressCircle
                    percent={this.state.media * 10}            
                    radius={30}
                    borderWidth={8}
                    color="green"
                    shadowColor="#999"
                    bgColor="#fff">
                    <Text style={{ fontSize: 18 }}>{`${this.state.media}`}</Text>
                </ProgressCircle>
            </Card>
            
                <ScrollView >

                    <SemestreHist semestre={this.state.semestre1} />
                    <SemestreHist semestre={this.state.semestre2} />
                    <SemestreHist semestre={this.state.semestre3} />
                    <SemestreHist semestre={this.state.semestre4} />
                    <SemestreHist semestre={this.state.semestre5} />
                    <SemestreHist semestre={this.state.semestre6} />
                    <SemestreHist semestre={this.state.semestre7} />
                    <SemestreHist semestre={this.state.semestre8} />
                        
                    
                </ScrollView>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
    
})



export default Historico