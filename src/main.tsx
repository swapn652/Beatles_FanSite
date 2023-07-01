import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// toggle.addEventListener('click', function(){
//   this.classList.toggle('bi-moon');
//   if(this.classList.toggle('bi-brightness-high-fill')){
//       body.style.background = '#FFF4F4';
//       // body.nav.style.background = '#19376D'
//       body.style.color = '#374259';
//       body.style.transition = '5s';
      

//   }else{
//       body.style.background = '#374259';
//       // body.nav.style.background = '#F7F7F7'
//       body.style.color = '#FFF4F4';
//       body.style.transition = '5s';

//   }
// });