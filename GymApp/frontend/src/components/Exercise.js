import React, {useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export const Exercise = () =>{

    let { muscle } = useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`/api/muscleGroup/${muscle}`)
          .then(response => response.json())
          .then(json => setData(json.data))
          .catch(err => {
            console.log("Error Reading data " + err);
          });
    }, [])


    return (
        <div>
            { data }
        </div>
        
    )
}
