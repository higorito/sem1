import {React, useState, useRef } from "react";  //useRef é pra guardar referencias, usado para pegar valores de inputs e etc
import {View, Text, StyleSheet, TextInput} from "react-native";

import Botao from "../../componentes/Button/Botao"

export default function Registrar(){  
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    //useref
    const emailRef = useRef();
    const senhaRef = useRef();

     //isso aqui poderia ser componentizado em um arquivo separado, mas como é só um exemplo, deixei aqui mesmo
    return(   
      <View style={ { flex: 1, alignItems:"center", justifyContent: "center", backgroundColor: "#6C969D" } }>
        <TextInput
          placeholder="Nome"
          returnKeyType="next" //muda o botão do teclado para next
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={setNome}    //ou onChangeText={(text) => setNome(text)}
          onSubmitEditing={() => emailRef.current.focus()}  //quando apertar o botão next vai para o proximo campo
          style={estilo.estiloEntrada}
        />

        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"   //muda o teclado para o de email
          returnKeyType="next" //muda o botão do teclado para next
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}    //ou onChangeText={(text) => setNome(text)}
          onSubmitEditing={() => senhaRef.current.focus()}  
          style={estilo.estiloEntrada}
          ref={emailRef}
        />

        <TextInput
          placeholder="Senha"
          secureTextEntry={true}   //para não mostrar a senha
          returnKeyType="send" //DIFERENTE pq é o ultimo campo, muda o botão do teclado para send
          autoCorrect={false}
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}    //ou onChangeText={(text) => setNome(text)}
          onSubmitEditing   //aq da pra fazer uma função para enviar os dados para o backend...
          style={estilo.estiloEntrada}
          ref={senhaRef}
        />
      </View>

    )

}

const estilo = StyleSheet.create({     
    estiloEntrada: {
      width: "80%",
      height: 40,
      padding: 10,
      backgroundColor: "#fff",
      borderRadius: 7,
      borderColor: "#000",
      marginBottom: 12, 
      fontSize: 16,
      color: "#000",

    },
});
