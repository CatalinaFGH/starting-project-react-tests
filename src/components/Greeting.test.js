import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
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

    test('renders "good to see you" if the button was NOT clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act
        //Assert
        const greetingElement = screen.getByText("it's good to see you", { exact: false });
        expect(greetingElement).toBeInTheDocument();
    });

    test('renders "Changed" if the button was clicked', () => {
        // Arrange
        render(<Greeting />)
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
        
    });

    test('does not render "good to see you" if the button was clicked', () => {
        
        // Arrange
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        /*
         Usamos este test para revisar que el párrafo sea condicional y que,
         efectivamente su contenido cambie al presionar el botón
         La correcta declaración sería:
         {!changedText && <p>It's good to see you!</p>}
         Pero si tuvieramos solo el párrafo, el test nos tiraría error
         <p>It's good to see you!</p>
        */
       // Declaramos el trozo de código a testear.
        const outputElement = screen.queryByText("It's good to see you!"); //Diferencia entre query y get?
        // El resultado del párrafo será nulo al ejecutar el click, ya que su contenido desaparecerá, por ende el test pasará
        expect(outputElement).toBeNull();
        /*
         No podemos usar getByText porque al no encontrar el texto, tirará error y lo que nosotros queremos testear es que
         efectivamente el párrafo desaparesca y NO esté en el documento al hacer click.
        */
        
    });
    
});