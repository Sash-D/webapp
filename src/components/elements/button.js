import styled from 'styled-components'

const Button = styled.button`
    background-color: var(--color- ${props => props.bgcolor || 'blue'});
    color: var(--color- ${props => props.color || 'white'});
    padding: ${props => props.padding || '1.2rem 1.6rem'};
    font-size: ${props => props.size || 'var(--text-size-xxs)'};
    font-weight: ${props => props.weight || 'bold'};
    border: 0;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
        background-color: var(
            --color- ${props => props.bgcolor || 'dark-blue'}
        );
    }
`

export default Button
