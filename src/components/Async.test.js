import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />)
        /*
        No podemos usar getAllByRole ya que nos tirará error, porque al ser una petición
        a una api, la información solicitada demorará en aparecer en pantalla y en renderizarse.
        Por ende, necesitamos que exista un periodo de "espera".
        Así, debemos usar findAllByRole de la mano con async y await. 
        */
        // const listItemElements = screen.getAllByRole('listitem')
        const listItemElements = await screen.findAllByRole('listitem')
        // Y le diremos que esperamos que el array con la info de la api NO SEA 0, es decir, NO esté vacío.
        expect(listItemElements).not.toHaveLength(0);
    });
    
    test('renders posts if request succeeds using a mock', async () => {
        
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}],
        });

        render(<Async />)

        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    });
});