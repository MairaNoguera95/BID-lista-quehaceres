import { useState } from "react"

import Quehaceres from "../Tareas/Quehaceres.jsx"

const ListaQuehaceres = ()=>{
    const [chores, setChores]= useState([]);
    const [newChore, setNewChore] = useState("");

    const handleNewChore = (e) => {
        e.preventDefault();
       let aux = [...chores];
        aux.push({ name: newChore, status: false })
        setChores([...aux]);
        setNewChore("");
    }
    const handleStatusChange = (value, idx) => {
        let aux = [...chores];
        aux[idx].status = value;
        setChores([...aux]);
    }
    const handleBorrarChore = (idx) => {
        let aux = [...chores];
        let filtered = aux.filter((value, index, array) => index !== idx)
        setChores([...filtered]);
    }


        return(
        <div>
            <form onSubmit={handleNewChore}>
                <h1> Lista de Que Haceres</h1>
                <input type="text" className='inputContenedor' value={newChore} onChange={(e) => setNewChore(e.target.value)}/>
                <button className='btn-Agregar'>Agregar</button>
            </form>
            <ul>
            {chores.map((item, idx, list) => {
                    return (
                        <Quehaceres
                            key={"tarea" + item + idx} {...item}
                            handleStatus={handleStatusChange}
                            index={idx}
                            handleBorrar={handleBorrarChore}
                        />
                    )
                })}
            </ul>
               
        </div>
    )
}
export default ListaQuehaceres;