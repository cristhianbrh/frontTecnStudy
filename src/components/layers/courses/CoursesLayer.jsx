import { useState } from 'react';
import AddCourseComponent from '../../addCourse/AddCourseComponent';
import HoraHorarioModel from '../../models/horaHorarioModel/HoraHorarioModel';
import './style.css';
const CoursesLayer = () => {
    const [isVisibleCourseAdd, setIsVisibleCourseAdd] = useState(false); 
    return (
        <div className="CoursesLayer">
            <AddCourseComponent isVisibleD={isVisibleCourseAdd}  setIsVisibleD={setIsVisibleCourseAdd} />

            <button onClick={()=>setIsVisibleCourseAdd(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm4 9a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 8 11Z" clip-rule="evenodd" /></svg>
                <p>Agregar curso</p>
            </button>
            <div className="CoursesLayer_Curso">
                <p>1. Comunicación</p>
                <div>
                    <p>Horario:</p>
                    <div className='CoursesLayer_Curso_Horario'>
                        <div>
                            {/* Clases */}
                            <HoraHorarioModel/>
                            <HoraHorarioModel/>
                            <HoraHorarioModel/> 
                            <HoraHorarioModel/>
                        </div>
                        <button >Agregar día y hora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoursesLayer;