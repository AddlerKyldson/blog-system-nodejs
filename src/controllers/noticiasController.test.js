const request = require('supertest');
const app = require('../server'); // Importe seu arquivo de servidor

describe('Testes de Notícias Controller', () => {
    it('Deve criar uma nova notícia', async () => {
        const response = await request(app)
            .post('/noticias')
            .send({
                title: 'Teste Notícia',
                content: 'Conteúdo de teste.',
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('title', 'Teste Notícia');
        expect(response.body).toHaveProperty('content', 'Conteúdo de teste.');
    });
});
