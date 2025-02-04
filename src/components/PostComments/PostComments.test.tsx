import { screen, render, fireEvent } from '@testing-library/react'
import PostComment from '.';

function inserirComentario(text: string) {
    const textarea = screen.getByTestId('txt-comment')
    const button = screen.getByTestId('btn-comment')

    fireEvent.change(textarea, { target: { value: text} });
    fireEvent.click(button)
}

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment/>);

        inserirComentario('Inserindo o primeiro comentario')
        inserirComentario('Inserindo o segundo comentario')

        const comments = screen.getAllByTestId('comment')
        expect(comments).toHaveLength(2)
    });
}); 