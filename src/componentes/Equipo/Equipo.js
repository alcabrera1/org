import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion

    const {colorPrimario, colorSecundario, titulo, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like } = props

    const colorEquipo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const colorH3 = {
        borderColor: colorPrimario
    }

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={colorEquipo}>
                <input
                    type='color'
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={colorH3}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key = {index} 
                            colorPrimario = {colorPrimario}
                            eliminarColaborador = {eliminarColaborador}
                            like = {like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}
export default Equipo