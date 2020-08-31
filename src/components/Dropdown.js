import React,{useState, useEffect, useRef} from 'react';

const Dropdown = (props) => {

    const [open, setOpen] = useState(false);

    //Access DOM element
    const ref = useRef();

    //Called only once to add click event listener to entire body of DOM
    useEffect (()=>{

        document.body.addEventListener('click',(event)=>{

            //If click is done inside the form which has been assigned as Ref value
            if(ref.current.contains(event.target))
            return;

            setOpen(false)
        })
    },[]);

    const renderedOptions = props.options.map((option)=>{

        if(option.value === props.selected.value)
        return null; //do nothing

        return(
            <div 
            key = {option.value} 
            className="item"
            onClick = {()=>props.onSelectedChange(option)}>
             {option.label}
            </div>
        )
    });

    return(
       <div ref={ref} className="ui form">
           <div className="field">
            <label className="label">{props.label}</label>
               <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open?'visible active':''}`}>
                   <i className="dropdown icon"></i>
                   <div className="text">{props.selected.label}</div>
                   <div className={`menu ${open?'visible transition':''}`}>
                       {renderedOptions}
                   </div>
               </div>
           </div>
       </div> 
    )
};

export default Dropdown;