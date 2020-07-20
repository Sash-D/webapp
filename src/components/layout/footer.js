import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import { Column } from '../containers/grid'
import { Header, Text } from '../../themes/typography'
import screen from '../../themes/screens'
import scrollTo from 'gatsby-plugin-smoothscroll'

const FooterSection = styled.footer`
    padding: 4rem 0;
    margin: 0;
    background-color: var(--color-dark-grey);

    ${Text} {
        color: var(--color-grey);
        font-size: 1.4rem;
    }
    @media ${screen.md} {
        text-align: center;
    }
`
const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;

    @media ${screen.md} {
        grid-row-gap: 3rem;

        ${Text} {
            font-size: 1.2rem;
        }
    }
    @media ${screen.sm} {
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
    }
`
const Col = styled(Column)`
    padding: 0;
`
const Links = styled.div`
    text-align: left;

    @media ${screen.md} {
        width: 100%;
    }
`
const FooterLink = styled(Text)`
    cursor: pointer;

    @media ${screen.md} {
        padding: 0.5rem 0;
    }
`

const Footer = () => (
    <FooterSection>
        <Container>
            <FooterGrid>
                <Col>
                    <Header as="h6" color="white" margin="0 0 1.5rem 0" transform="uppercase">
                        B.Lazic & CO LLC
                    </Header>
                    <Text lh="2">
                        28, John Kennedy Avenue, Stylianides Building
                    </Text>
                    <Text lh="2">
                        Office 401, 1087 Nicosia, Cyprus
                    </Text>
                </Col>
                <Col>
                    <Header as="h6" color="white" margin="0 0 1.5rem 0">
                        Contact us
                    </Header>
                    <Text lh="2">Phone: +357 22283330</Text>
                    <Text lh="2">Fax: +357 25322374</Text>
                    <Text lh="2">Email: bl@lazicco.com</Text>
                </Col>
                <Col>
                    <Links>
                        <Header as="h6" color="white" margin="0 0 0.8rem 0">
                            Links
                        </Header>
                        <FooterLink lh="2" onClick={() => scrollTo('#firm')}>
                            Who we are
                        </FooterLink>
                        <FooterLink lh="2" onClick={() => scrollTo('#practice')}>
                            Practice areas
                        </FooterLink>
                        <FooterLink lh="2" onClick={() => scrollTo('#credentials')}>
                            Credentials
                        </FooterLink>
                    </Links>
                </Col>
            </FooterGrid>
        </Container>
    </FooterSection>
)
export default Footer
