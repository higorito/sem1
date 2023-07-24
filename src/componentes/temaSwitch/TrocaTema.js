import { useContext } from "react";
import { View, Text, Switch } from "react-native";

import TemaContexto from "../../contexts/TemaContexto";
import TemaApp from "../../themes/TemaApp";

export default function TrocaTema(){
    const [temaModo, setTemaModo] = useContext(TemaContexto); //AQUI pega inteiro usecontext (aquela arrow function) 

    return(
        <View style={TemaApp[temaModo + 'Container']}>
            <Text style={{color: TemaApp[temaModo].textColor, fontSize: 40}}>
                {temaModo === 'light' ? '🌞' : '🌚'}
                    
            </Text>

            <Switch
                style={{marginTop: 30, transform: [{scaleX: 2}, {scaleY: 2}]}} 
                value={temaModo === 'light'}
                onValueChange={()=> setTemaModo(temaModo === 'light' ? 'dark' : 'light')} 
            />

        </View>
    )
}
