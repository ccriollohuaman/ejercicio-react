import React, { useState, useEffect } from 'react';

const ClockFunction = () => {

    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellido: 'San José'
    }

    const [data, setData] = useState(initialData);

    useEffect(() => {
        const updateData = () => {
            setData(prevData => ({
                ...prevData,
                fecha: new Date(),
                edad: prevData.edad + 1
            }))
        }

        const updateInterval = setInterval(()=>{
            updateData();
        },1000)


        return () => {
            clearInterval(updateInterval);
        };
    });

    return (
        <div>
            <h2>
                Hora Actual: {data.fecha.toLocaleTimeString()}
            </h2>
            <h2>    
                Nombre y apellido: {data.nombre}, {data.apellido}
            </h2>
            <h2>
                Edad: {data.edad}
            </h2>
        </div>
    );
}

export default ClockFunction;
