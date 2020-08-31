import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('London'); //State initialisation with set state method
    const [results, setResults] = useState([]);

    //useEffect method can be called in three cases.
    //1. If you do not specify sencond parameter then this will be called everytime the component is rendered.
    //2. If you specify empty array [] as second paramter it will be called only first time component load.
    //3. If you pass array of states like [term] it will be called first time and everytime those states are changed.
    
    useEffect(()=>{

        const search = async () => {

            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format:'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };

        //Call search only after one second of input change event
        const timeOutID = setTimeout(()=>{
            if(term)
            search();
        },1000); 

        //Below clean up function is called between two renders of useeffect
        return () => {
            console.log('Clean Up');
            clearInterval(timeOutID);
        }
    },[term]);

    const renderedResults = results.map((result)=>{
        return(
            <div key ={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" 
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    });
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}/>
                </div>
            </div>
            <div className = "ui celled list">
               {renderedResults}
            </div>
        </div>
    );
};

export default Search;