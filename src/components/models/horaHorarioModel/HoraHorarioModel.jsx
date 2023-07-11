import { useState } from 'react';
import { daysText, splitTime } from '../../../tools/time/timeSettings';
import './style.css'
const HoraHorarioModel = ({ tag, day, ti, te }) => {
    const ti_t = splitTime(ti);
    const te_t = splitTime(te);

    return (
        <div className='HoraHorarioModel'>
            <div>
                <b>{tag}</b>
                <p><b>{daysText[day]}:</b> {ti_t.hour}:{ti_t.minutes} {ti_t.type} - {te_t.hour}:{te_t.minutes} {te_t.type}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z" /></svg>
        </div>
    )
}
export default HoraHorarioModel;

