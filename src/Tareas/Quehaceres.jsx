
const Quehaceres =(props)=>{

    return (
        <li> 
            {props.status === true ?
            <s>{props.name}</s>
            :
            props.name}
            <input type="checkbox" checked={props.status} onChange={(e) => props.handleStatus(e.target.checked, props.index)} />
            <button className='btnBorrar' onClick={(e) => props.handleBorrar(props.index)} >Borrar</button>
        </li>
    )
}
export default Quehaceres;