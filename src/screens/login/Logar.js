import React from "react";
import {View, Text, StyleSheet} from "react-native";

import Botao from "../../componentes/Button/Botao"

export default function Logar(){  
    return(    /*estiloso é o nome do objeto que contém os estilos dai chama o container */
      <View style={estiloso.container}>  
        <Text style={{fontSize: 25, fontWeight: "bold", color: "#452b34"}}> TELA LOGIN </Text>

        <Botao onPress={()=>console.log('botao apertado')} texto="Logar" cor="red"/>
        <Botao onPress={()=>console.log('botao 2 apertado')} texto="Teste" cor="blue"/>
     
      </View>
    )

}

//posso criar uma pasta para os estilos e importar aqui 
const estiloso = StyleSheet.create({      //é um objeto que contém todos os estilos da aplicação
    container: {
      flex: 1,   
      backgroundColor: "#88d1ca",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  