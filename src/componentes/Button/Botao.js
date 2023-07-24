import { TouchableOpacity, Text } from "react-native";

//pode enviar QUASE TUDO via PROP tipo cores, tamanhos de fonte, texto, etc... mas cuidado
export default function Botao( {onPress, texto, cor} ){      //outro jeito de declarar um componente  const Botao = () =>{ } e no final  export default Botao;
    return(
        <TouchableOpacity onPress={onPress} style={{backgroundColor: cor, padding: 10, borderRadius: 5, margin:5,
            width: 200, alignItems: "center", justifyContent: "center"
        }}>
           
            <Text style={{color: "#fff", fontSize: 20}}>{texto}</Text>
        </TouchableOpacity>
    )
}

