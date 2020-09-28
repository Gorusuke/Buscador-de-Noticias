import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/UseSelect';
import PropTypes from 'prop-types';



const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deporte'},
        {value: 'technology', label: 'Tecnologia'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'}
    ]

    // Utilizar el useSelect
    const [categoria, SetCategoria] = useSelect('general', OPCIONES);

    // submit al form, pasar la categoria al app
    const buscarNoticias = e => {
        e.preventDefault();
        
        guardarCategoria(categoria);
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categorias</h2>
                    <SetCategoria />
                    <div className="col s12 input-field">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar" 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;