import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function App(){  /*estiloso é o nome do objeto que contém os estilos dai chama o container */
  return(
    <View style={estiloso.container}>  
      <Text style={{fontSize: 25, fontWeight: "bold"}}> posso estilizar assim tmb </Text>
      
      <TouchableOpacity style={{backgroundColor: "#f00", padding: 10, borderRadius: 5}}>
        <Text style={{color: "#fff", fontSize: 20}}>Legal botão</Text>
      </TouchableOpacity>
    </View>
  )

}

//posso criar uma pasta para os estilos e importar aqui 
const estiloso = StyleSheet.create({      //é um objeto que contém todos os estilos da aplicação
  container: {
    flex: 1,   
    backgroundColor: "#afd",
    alignItems: "center",
    justifyContent: "center",
  },
});
