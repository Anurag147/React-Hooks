import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({language,text}) => {

    const [translated, setTranslated] = useState('');

    useEffect(()=>{

        const doTranslation = async () => {
                const response = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params:{
                        q: text,
                        target: language.value,
                        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
                }
            );
            setTranslated(response.data.data.translations[0].translatedText);
        }
        doTranslation();
    }, [language,text]);

    return(
     <div>{translated}</div>
    )
}

export default Convert;