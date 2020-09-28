import React, { Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apiKey = '7b0e00d194be453f9260eb831a30d278';
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${apiKey}`;
      const respuesta = await axios.get(url);
      setNoticias(respuesta.data.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
