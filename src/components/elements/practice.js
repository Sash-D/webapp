import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'

const Section = styled.div`
    padding: 9rem 0;
    background-color: var(--color-white);
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`

const Practice = () => (
    <Section id="practice">
        <Container>
            <Header as="h2" align="center" weight="800">
                Vivamus dictum auctor tincidunt practice
            </Header>
            <Text align="center" margin="0 0 8rem">
                Sed facilisis massa non lectus venenatis, sed suscipit urna ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
            <Grid
                columns="repeat(3, 1fr)"
                columngap="6.5rem"
                rowgap="5rem"
                mobilerowgap="5rem"
            >
                <Col justify="center">
                    <Header as="h5" align="center" lh="2">
                        Pellentesque id leo dictum
                    </Header>
                    <Text align="center">
                        Pellentesque id leo dictum, euismod massa et, fringilla massa. Sed tempor est vitae diam placerat bibendum. Ut eget nunc ut velit scelerisque facilisis in eu lectus.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h5" align="center" lh="2">
                        Suspendisse varius sem mauris
                    </Header>
                    <Text align="center">
                        Suspendisse varius sem mauris, sed ultricies nisl luctus in. Curabitur pharetra eu sem ut mollis. Suspendisse suscipit aliquet magna, vel finibus orci.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h5" align="center" lh="2">
                        In pellentesque laoreet
                    </Header>
                    <Text align="center">
                        In pellentesque laoreet ex vitae eleifend. Nullam sit amet diam pharetra, pharetra mi ut, dapibus elit. Sed in luctus lectus, et molestie quam.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h5" align="center" lh="2">
                        Sed semper sem erat
                    </Header>
                    <Text align="center">
                        Sed semper sem erat, eu rutrum lorem hendrerit vel. Curabitur sollicitudin mauris at molestie ultricies. Aenean in odio vel arcu dapibus tempor sed eu est.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h5" align="center" lh="2">
                        In pellentesque laoreet
                    </Header>
                    <Text align="center">
                        In pellentesque laoreet ex vitae eleifend. Nullam sit amet diam pharetra, pharetra mi ut, dapibus elit. Sed in luctus lectus, et molestie quam.
                    </Text>
                </Col>
                <Col justify="center">
                    <Header as="h5" align="center" lh="2">
                        Sed semper sem erat
                    </Header>
                    <Text align="center">
                        Sed semper sem erat, eu rutrum lorem hendrerit vel. Curabitur sollicitudin mauris at molestie ultricies. Aenean in odio vel arcu dapibus tempor sed eu est.
                    </Text>
                </Col>
            </Grid>
        </Container>
    </Section>
)
export default Practice
