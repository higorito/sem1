import { createContext } from "react";

const TemaContexto = createContext(["light", () => {}]);  //criando o contexto

export default TemaContexto;  //exportando o contexto