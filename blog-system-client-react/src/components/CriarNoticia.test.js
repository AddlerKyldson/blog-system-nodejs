import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CriarNoticia from './CriarNoticia';

test('Deve criar uma nova notícia', async () => {
    const onNoticiaCriadaMock = jest.fn();

    const { getByLabelText, getByText } = render(<CriarNoticia onNoticiaCriada={onNoticiaCriadaMock} />);

    const titleInput = getByLabelText(/título/i);
    const contentInput = getByLabelText(/conteúdo/i);
    const submitButton = getByText(/adicionar notícia/i);

    fireEvent.change(titleInput, { target: { value: 'Teste Notícia' } });
    fireEvent.change(contentInput, { target: { value: 'Conteúdo de teste.' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(onNoticiaCriadaMock).toHaveBeenCalled();
    });
});
