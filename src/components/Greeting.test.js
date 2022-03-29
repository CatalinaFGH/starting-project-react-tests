import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />)
    
        // Act
    
        //Assert
        //Si ponemos exact false, ya no será sensitive case:
         const helloWorldElement = screen.getByText('Hello World', { exact: false });
        // const helloWorldElement = screen.getByText('Hello World!');
        // expect(helloWorldElement).not.toBeInTheDocument();
        expect(helloWorldElement).toBeInTheDocument();
    });
});