// useState permite a criação de estado
import React, { useState, useEffect } from 'react';  
import './styles.css';

import { Card } from '../../componentes/Card';

export function Home() {
  
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');
const [valorICM, setValorICM] = useState([])


function Calcular(){
    const calculoICM = {calculoMedida: (peso / (altura * altura)).toFixed(1)}
    
    // if(calculoICM < 18.5){
    //   const situacao = {situacao: 'Abaixo do peso.'}
    //   setValorICM([calculoICM])
    //   setValorICM([situacao])
    // } else {
    //   const situacao = {situacao: 'Peso ideal.'}
    //   setValorICM([calculoICM])
    //   setValorICM([situacao])
    // }

    setValorICM([calculoICM])
}


return (
  <div className='container'>
      <div id="calculoInicial">

        <header>
          <h1>Calculadora de ICM</h1>
        </header>
    
        <div className='entradaDeDados'>
          <p>Digite sua altura (m e cm):</p>
            <input 
              type="text"
              name='alturaInput' 
              placeholder="Exemplo: 1.7"
              onChange={e => setAltura(e.target.value)}
            />

          <p>Digite seu peso (kg):</p>
            <input 
              type="text"
              name='pesoInput' 
              placeholder="Exemplo: 85"
              onChange={e => setPeso(e.target.value)}
            />
          
        </div>

        <div className='botao'>
          <button type="button" onClick={Calcular} className="botaoCalcular">
            Calcular
          </button>
          <button type="button" className="botaoLimpar">
            Limpar
          </button>
        </div>


{
  valorICM.map( ICM => < Card medidas={ICM.calculoMedida}/>)
}
 
  </div>

    </div>
  )
}


