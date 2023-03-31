import { useState } from "react";

const TestLayer = () => {
    const courses = useState(
        [
            {
                name: 'Comunicación',
                tests: [
                    {
                        description: 'Crear un video de programación, indicando las bases del lenguaje de programación javascript, teniendo en cuenta una buena práctica de programación, para realizar y conseguir resultados positivos',
                        fechaInicio: 12 - 1 - 2000,
                        fechaFin: 12 - 1 - 2000,
                        estado: 'No iniciado'
                    }
                ]
            },
            {
                name: 'Matemática',
                tests: [
                    {
                        description: 'Crear un video de programación, indicando las bases del lenguaje de programación javascript, teniendo en cuenta una buena práctica de programación, para realizar y conseguir resultados positivos',
                        fechaInicio: 12 - 1 - 2000,
                        fechaFin: 12 - 1 - 2000,
                        estado: 'No iniciado'
                    }
                ]
            },
            {
                name: 'Ciencias sociales',
                tests: [
                    {
                        description: 'Crear un video de programación, indicando las bases del lenguaje de programación javascript, teniendo en cuenta una buena práctica de programación, para realizar y conseguir resultados positivos',
                        fechaInicio: 12 - 1 - 2000,
                        fechaFin: 12 - 1 - 2000,
                        estado: 'No iniciado'
                    }
                ]
            },
            {
                name: 'Programación',
                tests: [
                    {
                        description: 'Crear un video de programación, indicando las bases del lenguaje de programación javascript, teniendo en cuenta una buena práctica de programación, para realizar y conseguir resultados positivos',
                        fechaInicio: 12 - 1 - 2000,
                        fechaFin: 12 - 1 - 2000,
                        estado: 'No iniciado'
                    }
                ]
            }
        ]

    );

    return (
        <div className="TestLayer">
            <button>Agregar Exámen</button>
            <div className="sort">
                <p>Ordenar por:</p>
                <select name="sortSelect">
                    <option value="fi">Fecha inicio</option>
                    <option value="ff">Fecha fin</option>
                    <option value="ei">Estado no iniciado</option>
                    <option value="ep">Estado en progreso</option>
                    <option value="ef">Estado finalizado</option>
                </select>
            </div>
        </div>
    )
}
export default TestLayer;