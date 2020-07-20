import styled from 'styled-components'
import screen from '../../themes/screens'

const Container = styled.div`
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;

    @media ${screen.xxl} {
        max-width: 1440px;
    }
    @media ${screen.xl} {
        max-width: 1180px;
    }
    @media ${screen.lg} {
        max-width: 960px;
    }
    @media ${screen.md} {
        max-width: 720px;
    }
    @media ${screen.sm} {
        max-width: 540px;
    }
`

export const SectionContainer = styled.section`
    width: 100%;
    padding: ${props => props.padding || '8rem 0'};
`

export default Container
