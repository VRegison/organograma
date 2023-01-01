import './formulario.css'
import { CampoTexto } from '../CampoTexto';
export const Formulario = () => {
     return (
          <section className='formulario'>
               <form>
                    <h2>Preecha os dados para criar o card :</h2>
                    <CampoTexto label='Nome' placeholder='Digite seu nome' />
                    <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
                    <CampoTexto label='Imagem' placeholder='Selecione uma imagem' />
               </form>
          </section>
     )
}