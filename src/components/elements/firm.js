import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
//import Image from './image'

const Section = styled.div`
    position: relative;
    padding: 9rem 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
`
const FeaturedGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 3rem;

    @media ${screen.md} {
        grid-template-columns: 1fr;
        row-gap: 3rem;
    }
`

const Firm = () => (
    <Section id="firm">
        <Container>
            <FeaturedGrid>
                <Column align="start">
                    <Header as="h2" align="center" lh="2" weight="800" >
                        Who we are
                    </Header>
                </Column>
                <Column align="center">
                    <Text>
                        Nullam ut vulputate felis, scelerisque tempor sapien. Nunc dignissim id sem ut congue. Fusce tortor ipsum, consequat et ultrices sit amet, cursus id dolor. Donec convallis, justo sed sodales ornare, est risus tempus enim, quis vulputate nisl ante quis purus. Maecenas aliquet, libero semper bibendum semper, est urna iaculis arcu, eget viverra eros arcu at orci. Integer sit amet lectus quis augue elementum dignissim. Duis at dui tincidunt, finibus ligula quis, tempus massa.
                    </Text>
                    <Text margin="2rem 0 0">
                        Donec nec ex eget tellus lobortis sodales id vel diam. Pellentesque efficitur posuere dictum. Etiam nec ex aliquet, commodo nulla nec, laoreet risus. Nullam eget erat facilisis, fermentum nisi nec, sollicitudin justo. Nullam cursus ultricies metus, vitae porta lacus fringilla in. Curabitur non risus et lorem interdum rutrum et in nunc.
                    </Text>
                </Column>
            </FeaturedGrid>
        </Container>
    </Section>
)
export default Firm
