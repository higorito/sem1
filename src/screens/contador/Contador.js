import React from "react";
import { useState, useEffect } from "react";   //importando o useState um dos mais importantes do react
import {View, Text, StyleSheet} from "react-native";

import Botao from "../../componentes/Button/Botao"

export default function Contador(){  
    const [contador, setContador] = useState(0);  //useState é um hook que retorna um array com 2 posições, a primeira é o valor inicial e a segunda é uma função para atualizar o valor
    
    const [corFundo, setCorFundo] = useState("#88d1ca");  

    const aumentar = () => {  //função para aumentar o contador
        setContador(contador+1); //setContador é a função que atualiza o valor do contador
    }

    const diminuir = () => {  
        setContador(contador-1);
    }

 //pode usar tipo para fazer requisições http, etc... muitos usos para o useEffect
    useEffect(() => {   //useEffect é um hook que executa uma função sempre que o componente é renderizado
      if(contador > 0){
        setCorFundo("#adfcf9")
      }else if(contador < 0){
        setCorFundo("#89A894")
      }else{
        setCorFundo("#88d1ca")
      }
    
    }, [contador])  //consiste em um array de dependencias se sofrer alteração executa a função
        

    return(    /*estiloso é o nome do objeto que contém os estilos dai chama o container */
      <View style={{
        flex: 1,   
        backgroundColor: corFundo,
        alignItems: "center",
        justifyContent: "center"
        }
      }>  
        <Text style={{fontSize: 25, fontWeight: "bold", color: "#452b34"}}> TELA Home </Text>

        <Text style={{fontSize: 40, fontWeight: "bold", color: "#452b34"}}> {contador} </Text>

        <Botao onPress={aumentar} texto="Aumentar" cor="green"/> 
        <Botao onPress={diminuir} texto="Diminuir" cor="red"/> 

      </View>
    )

}
//ctrl + ; para comentar
// //posso criar uma pasta para os estilos e importar aqui 
// const estiloso = StyleSheet.create({      //é um objeto que contém todos os estilos da aplicação
//     container: {
//       flex: 1,   
//       backgroundColor: "#88d1ca",
//       alignItems: "center",
//       justifyContent: "center",
//     },
// });
  