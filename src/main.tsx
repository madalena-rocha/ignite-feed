import React from 'react'
// O react é o pacote responsável pelo core do React, contendo as funcionalidades compartilhadas entre 
// todos os ambientes, seja React Native, React para Web, TV, VR...
import ReactDOM from 'react-dom/client'
// O react-dom é a integração do react com a DOM, que é a representação do HTML através do JavaScript, 
// ou seja, ao importar o react-dom, estamos integrando o rect para funcionar no ambiente web, no browser
import { App } from './App'

// O TypeScript alerta que o document.getElementById('root') pode ser nulo, pois o root pode não existir
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
