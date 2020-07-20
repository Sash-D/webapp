import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header } from '../../themes/typography'

const Section = styled.div`
    padding: 8rem 0;
    background-color: var(--color-light-grey);
    border-bottom: 0.1rem solid var(--color-light-grey);
`
const HeroContent = styled(Grid)`
    padding: 0;
`
const Col = styled(Column)`
    padding: 0;
`

const Intro = () => (
    <Section>
        <Container>
            <HeroContent
                columns="1fr"
                columngap="1rem"
                rowgap="5rem"
                mobilerowgap="3rem"
            >
                <Col justify="center">
                    <Header as="h4" align="center" weight="800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Header>
                    <Header as="h6" align="center" weight="400">
                    Maecenas non ex volutpat, convallis neque non, tempus nisi. Maecenas porta, risus sed aliquet efficitur, est tortor convallis sapien, eu laoreet ipsum neque eu sapien. Integer euismod neque ut enim malesuada porttitor. Maecenas euismod odio ex, in ornare massa semper eget.
                    </Header>
                </Col>
            </HeroContent>
        </Container>
    </Section>
)
export default Intro
