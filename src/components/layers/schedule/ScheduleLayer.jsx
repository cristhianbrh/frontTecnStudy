import { useState } from "react";
import "./style.css";
const ScheduleLayer = ()=>{
    const [isVoid, setIsVoid] = useState(true);

    return (
        <div className="SheduleLayer">
            <div className="SheduleLayer_init" style={{display: !isVoid?'none':'flex'}}>
                <div>
                    <div className="sheduleDay">
                        <p>Lunes</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                    <div className="sheduleDay">
                        <p>Martes</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                    <div className="sheduleDay">
                        <p>Miércoles</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                    <div className="sheduleDay">
                        <p>Jueves</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                    <div className="sheduleDay">
                        <p>Viernes</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                    <div className="sheduleDay">
                        <p>Sábado</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                    <div className="sheduleDay">
                        <p>Domingo</p>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                        <div className="dead">
                            <p>7:00am - 10:00am</p>
                        </div>
                        <div className="active">
                            <p className="active_Title">Base de datos</p>
                            <p className="active_Time">7:00am - 10:00am</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SheduleLayer_isVoid" style={{display: isVoid?'none':'flex'}}>
                dsds
            </div>
        </div>
    )
}
export default ScheduleLayer;