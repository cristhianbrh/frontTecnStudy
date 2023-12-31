import CoursesLayer from "../../components/layers/courses/CoursesLayer";
import TestLayer from "../../components/layers/test/TestLayer";
import ScheduleLayer from "./../../components/layers/schedule/ScheduleLayer";


const layerOptions = [
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 19l-1.25-2.75L8 15l2.75-1.25L12 11l1.25 2.75L16 15l-2.75 1.25Zm-7 3q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z" /></svg>,
        name: 'Horario',
        layer: <ScheduleLayer/>
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="m33.48 29.63l-6.74-17.81a2 2 0 0 0-2.58-1.16L21 11.85V8.92A1.92 1.92 0 0 0 19.08 7H14V4.92A1.92 1.92 0 0 0 12.08 3H5a2 2 0 0 0-2 2v27a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V19.27l5 13.21a1 1 0 0 0 1.29.58l5.61-2.14a1 1 0 0 0 .58-1.29ZM12 8.83V31H5V5h7ZM19 31h-5V9h5Zm8.51-.25l-6.38-16.83l3.74-1.42l6.39 16.83Z" /><path fill="none" d="M0 0h36v36H0z" /></svg>,
        name: 'Cursos',
        layer: <CoursesLayer/>
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 10c-.24 0-.45.09-.59.25c-.14.15-.2.37-.17.61l.5 2.99C2.82 14.5 3.4 15 4 15h3c.64 0 1.36-.56 1.5-1.18l1.06-3.19c.04-.13.01-.32-.06-.44c-.11-.12-.28-.19-.5-.19H3m4 7H4C2.38 17 .96 15.74.76 14.14l-.5-2.99C.15 10.3.39 9.5.91 8.92C1.43 8.34 2.19 8 3 8h6c.83 0 1.58.35 2.06.96c.11.15.21.31.29.49c.43-.09.87-.09 1.29 0c.08-.18.18-.34.3-.49C13.41 8.35 14.16 8 15 8h6c.81 0 1.57.34 2.09.92c.51.58.75 1.38.65 2.19l-.51 3.07C23.04 15.74 21.61 17 20 17h-3c-1.56 0-3.08-1.19-3.46-2.7l-.9-2.71c-.38-.28-.91-.28-1.29 0l-.92 2.78C10.07 15.82 8.56 17 7 17m8-7c-.22 0-.39.07-.5.19c-.08.12-.1.31-.05.51l1.01 3.05c.18.69.9 1.25 1.54 1.25h3c.59 0 1.18-.5 1.25-1.11l.51-3.07c.03-.2-.03-.42-.17-.57A.769.769 0 0 0 21 10h-6Z" /></svg>,
        name: 'Exámenes',
        layer: <TestLayer/>
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14 8.775q0-.225.163-.463q.162-.237.362-.312q.725-.25 1.45-.375T17.5 7.5q.5 0 .988.062q.487.063.962.163q.225.05.387.25q.163.2.163.45q0 .425-.275.625t-.7.1q-.35-.075-.737-.113Q17.9 9 17.5 9q-.65 0-1.275.125q-.625.125-1.2.325q-.45.175-.737-.025q-.288-.2-.288-.65Zm0 5.5q0-.225.163-.463q.162-.237.362-.312q.725-.25 1.45-.375T17.5 13q.5 0 .988.062q.487.063.962.163q.225.05.387.25q.163.2.163.45q0 .425-.275.625t-.7.1q-.35-.075-.737-.113q-.388-.037-.788-.037q-.65 0-1.275.113q-.625.112-1.2.312q-.45.175-.737-.013q-.288-.187-.288-.637Zm0-2.75q0-.225.163-.463q.162-.237.362-.312q.725-.25 1.45-.375t1.525-.125q.5 0 .988.062q.487.063.962.163q.225.05.387.25q.163.2.163.45q0 .425-.275.625t-.7.1q-.35-.075-.737-.113q-.388-.037-.788-.037q-.65 0-1.275.125q-.625.125-1.2.325q-.45.175-.737-.025q-.288-.2-.288-.65ZM6.5 16q1.175 0 2.288.262q1.112.263 2.212.788V7.2q-1.025-.6-2.175-.9Q7.675 6 6.5 6q-.9 0-1.787.175Q3.825 6.35 3 6.7v9.9q.875-.3 1.738-.45Q5.6 16 6.5 16Zm6.5 1.05q1.1-.525 2.213-.788Q16.325 16 17.5 16q.9 0 1.763.15q.862.15 1.737.45V6.7q-.825-.35-1.712-.525Q18.4 6 17.5 6q-1.175 0-2.325.3q-1.15.3-2.175.9Zm-6-5.4Zm5 7.825q-.35 0-.662-.087q-.313-.088-.588-.238q-.975-.575-2.05-.862Q7.625 18 6.5 18q-1.05 0-2.062.275q-1.013.275-1.938.775q-.525.275-1.012-.025Q1 18.725 1 18.15V6.1q0-.275.138-.525q.137-.25.412-.375q1.15-.6 2.4-.9Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5q1.275-.75 2.663-1.125Q16.05 4 17.5 4q1.3 0 2.55.3q1.25.3 2.4.9q.275.125.413.375q.137.25.137.525v12.05q0 .575-.487.875q-.488.3-1.013.025q-.925-.5-1.938-.775Q18.55 18 17.5 18q-1.125 0-2.2.288q-1.075.287-2.05.862q-.275.15-.587.238q-.313.087-.663.087Z" /></svg>,
        name: 'Tareas',
        layer: <p>4</p>
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.4a7.9 7.9 0 0 0 7.2-4.6a48.1 48.1 0 0 1 86.8 0a7.9 7.9 0 0 0 7.2 4.6H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM80 144a24 24 0 1 1 24 24a24.1 24.1 0 0 1-24-24Zm136 56h-56.6a64.6 64.6 0 0 0-28.8-26.2a40 40 0 1 0-53.2 0A64.6 64.6 0 0 0 48.6 200H40V56h176ZM56 96V80a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V88H72v8a8 8 0 0 1-16 0Z" /></svg>,
        name: 'Profesores',
        layer: <p>5</p>
    },
    {
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10ZM7 12l4 3l5-7" /></svg>,
        name: 'Notas',
        layer: <p>6</p>
    }
]

export default layerOptions;