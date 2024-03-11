import React, { useState } from 'react';
import NoticiasList from './components/NoticiasList';
import CriarNoticia from './components/CriarNoticia';

function App() {
  const [noticias, setNoticias] = useState([]);

  const handleNoticiaCriada = (novaNoticia) => {
    setNoticias([...noticias, novaNoticia]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <CriarNoticia onNoticiaCriada={handleNoticiaCriada} />
        <NoticiasList noticias={noticias} />
      </header>
    </div>
  );
}

export default App;
