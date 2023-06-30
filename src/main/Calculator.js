import React, { useState } from "react";
import Display from "../components/Display/Display";
import Button from "../components/Button/Button";
import "./Calculator.css";

export default function Calculator() {
  const [valorDisplay, setValorDisplay] = useState(" ");
  const [resultado, setResultado] = useState(" ");
  const [operador, setOperador] = useState(false);
  const [error, setError] = useState(false);                          //Adicionado estado p indicar erro

  //Funções
  const realizarCalculo = () => {
    try {
      const expressao = valorDisplay.replace("÷", "/").replace("×", "*");
      const resultado = eval(expressao);
  
      if (!Number.isFinite(resultado)) {
        throw new Error("Não é possível dividir por zero");
      }

      setResultado(parseFloat(resultado.toFixed(7)).toString());
      setOperador(true);
      setError(false);                                                //Define o estado de erro como falso em caso de sucesso
    } catch (error) {
      setResultado("Erro: " + error.message);
      setError(true);                                                 //Define o estado de erro como verdadeiro em caso de erro
    }
  };

  const addDigito = (digito) => {
    if (/[+×÷-]/.test(digito) && /[+×÷-]/.test(valorDisplay.slice(-1))) {
      //Substitui o operador anterior pelo novo operador.
      setValorDisplay(valorDisplay.slice(0, -1) + digito);
      return;
    }

    if (/[+×÷-]/.test(digito) && operador) {
      setOperador(false);
      setValorDisplay(resultado + digito);
    } else if (operador) {
      setValorDisplay(digito);
      setOperador(false);
    } else {
      setValorDisplay(valorDisplay + digito);
    }
  };  

  const clearMemory = () => {
    setValorDisplay(" ");
    setResultado(" ");
    setOperador(false);
  };

  const backspace = () => {
    setValorDisplay(valorDisplay.slice(0, -1));
    setOperador(false);
    setResultado(" ");
  };
  
  return (
    <div className="calculator-container">
      <h3 className="calculator-title">CALCULADORA</h3>
      <div className="calculator-display">
        <Display valor={valorDisplay} res={resultado} error={error} />
      </div>
      <div className="calculator-button">
        <Button label="AC" onClick={clearMemory} />
        <Button label="(" onClick={() => addDigito("(")} />
        <Button label=")" onClick={() => addDigito(")")} />
        <Button label="÷" onClick={() => addDigito("÷")} />
        <Button label="7" onClick={() => addDigito("7")} />
        <Button label="8" onClick={() => addDigito("8")} />
        <Button label="9" onClick={() => addDigito("9")} />
        <Button label="×" onClick={() => addDigito("×")} />
        <Button label="4" onClick={() => addDigito("4")} />
        <Button label="5" onClick={() => addDigito("5")} />
        <Button label="6" onClick={() => addDigito("6")} />
        <Button label="-" onClick={() => addDigito("-")} />
        <Button label="1" onClick={() => addDigito("1")} />
        <Button label="2" onClick={() => addDigito("2")} />
        <Button label="3" onClick={() => addDigito("3")} />
        <Button label="+" onClick={() => addDigito("+")} />
        <Button label="." onClick={() => addDigito(".")} />
        <Button label="0" onClick={() => addDigito("0")} />
        <Button label="C" onClick={backspace} />
        <Button label="=" onClick={realizarCalculo} />
      </div>
    </div>
  );
}
