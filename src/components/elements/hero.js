import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import { Header } from '../../themes/typography'
import BackgroundImg from './backgroundimage'
import screen from '../../themes/screens'

const HeroContent = styled(Grid)`
    padding: 20rem 0 0;
    align-items: center;
    justify-items: center;
    height: 100%;
    min-height: 100%;

    @media ${screen.md} {
        padding: 10rem 0 0;
    }
`
const Col = styled(Column)`
    padding: 0;
    text-align: center;
`
const HeroTitle = styled.div`
    padding: 2rem 0;
    max-width: 90rem;
    border-bottom: 1px dotted var(--color-grey);
`
const HeroSubTitle = styled.div`
    padding: 2rem 0;
    max-width: 90rem;
    text-align: center;
`
const Hero = () => (
    <BackgroundImg
        img_name="header.jpg"
        brightness="0.25"
        style={{ minHeight: '100vh' }}
    >
        <Container id="hero">
            <HeroContent columns="1fr" justify="center">
                <Col justify="center" align="center">
                    <HeroTitle>
                        <Header as="h1" align="center" color="white" weight="800">
                            Corporate Legal Services to Companies and Entrepreneurs Worldwide
                        </Header>
                    </HeroTitle>
                    <HeroSubTitle>
                        <Header as="h5" align="center" font="default" weight="300" color="white">
                            Our relationship with clients relies on trust. Everyone&apos;s business and personal affairs are unique and for this purpose we assist in the creation of tailor-made structures that suit a client&apos;s individual needs.
                        </Header>
                    </HeroSubTitle>
                </Col>
            </HeroContent>
        </Container>
    </BackgroundImg>
)
export default Hero
