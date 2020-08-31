import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


/*const items = [
    {
        title: 'What is React?',
        content: 'React is front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among developers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'RED',
        value: 'red'
    },
    {
        label: 'BLUE',
        value: 'blue'
    },
    {
        label: 'GREEN',
        value: 'green'
    }
];*/

//<Accordion items = {items}/>
//<Search />
//<Dropdown 
            //selected={selected} 
            //options={options} 
            //onSelectedchange={setSelected}/>
            

const App = () => {

    //const [selected,setSelected] = useState(options[0]);
    return(
        <div style={{margin:'20px'}}>
            <Translate />
        </div>
    );
};

export default App;