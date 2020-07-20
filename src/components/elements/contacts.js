import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
//import Image from './image'

const Section = styled.div`
    position: relative;
    margin: 0;
    padding: 9rem 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const FeaturedGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`
const Col = styled(Column)`
    padding: 0;
`
const Content = styled.div`
    padding: 4rem 0;
    height: 100%;
    display: grid;
    align-items: center;
    grid-row-gap: 0;
    margin-left: 5rem;

    @media ${screen.md} {
        margin-left: 0;
    }
`

const Contact = () => (
    <Section id="withus">
        <Container>
            <FeaturedGrid>
                <Col bgcolor="white">
                    <Content>
                        <Header as="h4" align="left">
                            Contact us
                        </Header>
                        <Text>
                            Nullam ut vulputate felis, scelerisque tempor sapien. Nunc dignissim id sem ut congue. Fusce tortor ipsum, consequat et ultrices sit amet, cursus id dolor. Donec convallis, justo sed sodales ornare, est risus tempus enim, quis vulputate nisl ante quis purus. Maecenas aliquet, libero semper bibendum semper, est urna iaculis arcu, eget viverra eros arcu at orci. Integer sit amet lectus quis augue elementum dignissim. Duis at dui tincidunt, finibus ligula quis, tempus massa.
                        </Text>
                    </Content>
                </Col>
                <Col>
                    <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
                        <label>
                            Email
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Name
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Message
                            <input type="text" name="message" />
                        </label>
                    </form>
                </Col>
            </FeaturedGrid>
        </Container>
    </Section>
)
export default Contact
