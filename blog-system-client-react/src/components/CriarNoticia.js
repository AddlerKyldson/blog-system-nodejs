import React, { useState } from 'react';
import axios from 'axios';

const CriarNoticia = ({ onNoticiaCriada }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/noticias', {
                title,  // Certifique-se de que os nomes correspondam
                content,  // Certifique-se de que os nomes correspondam
            });

            onNoticiaCriada(response.data); // Atualiza o estado de notícias ou executa ação desejada
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Erro ao criar notícia:', error.message);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Título:
                <input type="text" value={title} onChange={handleTitleChange} />
            </label>
            <label>
                Conteúdo:
                <textarea value={content} onChange={handleContentChange} />
            </label>
            <button type="submit">Adicionar Notícia</button>
        </form>
    );
};

export default CriarNoticia;
