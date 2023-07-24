import React from "react";
import { useState, useContext } from "react";   //importando o useState um dos mais importantes do react
import {View, Text, StyleSheet} from "react-native";

import TemaContexto from "../../contexts/TemaContexto";

import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";

import TrocaTema from "../../componentes/temaSwitch/TrocaTema";

export default function Home(){  
    const tema = useState('light');  

    return(  
      <TemaContexto.Provider value={tema}>
      <Header/>
      <TrocaTema/>
      <Footer/>
      </TemaContexto.Provider>
    )

}

  