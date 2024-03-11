import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoticiasList = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/noticias');
            setNoticias(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Notícias</h2>
            <ul>
                {noticias.map((noticia) => (
                    <li key={noticia._id}>
                        <h3>{noticia.title}</h3>
                        <p>{noticia.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoticiasList;
