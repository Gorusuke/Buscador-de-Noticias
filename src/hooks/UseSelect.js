import React, {useState} from 'react';


const UseSelect = (inicialState, options) => {

    // State del custom hook 
    const [state, actualizarState] = useState(inicialState);

    const selectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
    return [state, selectNoticias];
}
 
export default UseSelect;