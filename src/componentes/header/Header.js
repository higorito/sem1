import { useContext } from "react";
import { View, Text } from "react-native";

import TemaContexto from "../../contexts/TemaContexto";

import TemaApp from "../../themes/TemaApp";

export default function Header(){
    const tema = useContext(TemaContexto)[0]; //pegando o tema do contexto que criamos la no TemaContexto.js e colocando na variavel tema o [0] é para pegar o primeiro elemento do array

    return(
        <View style={TemaApp[tema + 'Container']}>
            <Text style={{color: TemaApp[tema].textColor, fontSize: 40}}>Header</Text>
        </View>
    )
}
