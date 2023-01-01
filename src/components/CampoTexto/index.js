import './campoTexto.css'
export const CampoTexto = (props) => {
     console.log("🚀 ~ file: index.js:3 ~ CampoTexto ~ props", props)
     return (
          <div className="campo-texto">
               <label>{props.label}</label>
               <input placeholder={props.placeholder} type="text" />
          </div>
     )
}