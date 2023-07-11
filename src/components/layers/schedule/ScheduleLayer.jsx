import { useState } from "react";
import { daysText, splitTime } from "../../../tools/time/timeSettings";
import "./style.css";
import coursesExample from "./../courses/coursesExample.json";
const ScheduleLayer = () => {
    const [isVoid, setIsVoid] = useState(true);
    const courses = coursesExample;

    return (
        <div className="SheduleLayer">
            <div className="SheduleLayer_init" style={{ display: !isVoid ? 'none' : 'flex' }}>
                <div>
                    {
                        daysText.map((day, index) => {
                            let courseListDay = sheduleDayStart(courses, index);

                            console.log(courseListDay)

                            return (
                                <div className="sheduleDay">
                                    <p>{day}</p>
                                    {
                                        courseListDay.day.map(obj => {
                                            const ti_t = splitTime(obj.timeInit);
                                            const te_t = splitTime(obj.timeEnd);
                                            return (
                                            <div className="active">
                                                <p className="active_Title">{courseListDay.name}</p>
                                                <span>{obj.tag}</span>
                                                <p className="active_Time">{ti_t.hour}:{ti_t.minutes} {ti_t.type} - {te_t.hour}:{te_t.minutes} {te_t.type}</p>
                                            </div>
                                        )})
                                    }
                                    {/* <div className="active">
                                        <p className="active_Title">Base de datos</p>
                                        <p className="active_Time">7:00am - 10:00am</p>
                                    </div>
                                    <div className="dead">
                                        <p>7:00am - 10:00am</p>
                                    </div>
                                    <div className="active">
                                        <p className="active_Title">Base de datos</p>
                                        <p className="active_Time">7:00am - 10:00am</p>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                    {/* <div className="sheduleDay">
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
                    </div> */}
                </div>
            </div>
            <div className="SheduleLayer_isVoid" style={{ display: isVoid ? 'none' : 'flex' }}>
                dsds
            </div>
        </div>
    )
}
export default ScheduleLayer;


const sheduleDayStart = (courses, index) => {
    let courseListDay;
    courses.forEach(course => {
        let dayFilter = course.schedules.filter(obj => obj.day == index);
        courseListDay = {
            name: course.name,
            day: dayFilter
        }
    })
    courseListDay.day.sort((a, b) => {
        let dateA = new Date("2023-03-01T" + a.timeInit + ":00Z")
        let dateB = new Date("2023-03-01T" + b.timeInit + ":00Z")
        console.log(dateA + " -- " + dateB);
        return dateA - dateB;
    })
    return courseListDay;
}