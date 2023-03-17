import HoraHorarioModel from "../models/horaHorarioModel/HoraHorarioModel";
import InputModel from "../models/input/InputModel";
import './style.css'

const AddCourseComponent = () => {
    return (
        <div className="AddCourseComponent">
            <div>
                <div className="AddCourseComponent_Content">
                    <p>Agregar Curso</p>
                    <InputModel tag="Curso" />
                    <div>
                        <p>Horario:</p>
                        <div>
                            <HoraHorarioModel />
                            <HoraHorarioModel />
                            <HoraHorarioModel />
                            <button></button>
                        </div>
                    </div>
                    <div>
                        <p>Notas del curso:</p>
                        <div>
                            <InputModel tag="Cantidad de notas" />
                            <button>Editar notas</button>
                        </div>
                    </div>
                </div>
                <div className="AddCourseComponent_buttons">
                    <button>Cancelar</button>
                    <button>Guardar</button>
                </div>
            </div>
        </div>
    )
}
export default AddCourseComponent;