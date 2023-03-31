import { useState } from "react";
import HoraHorarioModel from "../models/horaHorarioModel/HoraHorarioModel";
import InputModel from "../models/input/InputModel";
import './style.css'

const AddCourseComponent = ({isVisibleD, setIsVisibleD}) => {
    return (
        <div className="AddCourseComponent" style={{display: isVisibleD?"flex":"none"}} >
            <div>
                <div className="AddCourseComponent_Content">
                    <p>Agregar Curso</p>
                    <InputModel tag="Curso" />
                    <div className="AddCourseComponent_Content_Shedule">
                        <p>Horario:</p>
                        <div>
                            <HoraHorarioModel />
                            <HoraHorarioModel />
                            <HoraHorarioModel />
                            <button>Agregar día y hora</button>
                        </div>
                    </div>
                    <div className="AddCourseComponent_Content_Notes">
                        <p>Notas del curso:</p>
                        <div>
                            <InputModel tag="Cantidad de notas" />
                            <button>Editar notas</button>
                        </div>
                    </div>
                </div>
                <div className="AddCourseComponent_buttons">
                    <button onClick={()=>setIsVisibleD(false)}>Cancelar</button>
                    <button>Guardar</button>
                </div>
            </div>
        </div>
    )
}
export default AddCourseComponent;