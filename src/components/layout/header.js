import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Container from '../containers/container'
import Grid, { Column } from '../containers/grid'
import screen from '../../themes/screens'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Image from '../elements/image'
import Hamburger from '../../images/svg/menu.svg'

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 0;
    z-index: 9;
    background-color: #ffffff;
    box-shadow: 0.5rem 0 2rem rgba(0, 0, 0, 0.3);

    &.active {
        background-color: var(--color-blue);
    }
    @media ${screen.md} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0.5rem;
    }
`
const Logo = styled.div`
    width: 20rem;
    padding: 0;
    text-align: left;
    cursor: pointer;
`
const Nav = styled.ul`
    width: 100%;
    text-align: right;
    padding: 0;
    margin-top: 0.5rem;
`
const MainNav = styled(Column)`
    background-color: none;

    @media ${screen.md} {
        position: fixed;
        top: 0;
        left: -30rem;
        padding: 2rem;
        width: 25rem;
        height: 100vh;
        z-index: 9;
        transition: left 0.25s ease-in-out;
        background-color: var(--color-white);
        box-shadow: 0.5rem 0 2rem rgba(0, 0, 0, 0.3);
        overflow: auto;

        &.active {
            left: 0;
        }
    }
`
const NavLink = styled.li`
    list-style-type: none;
    display: inline-block;
    text-align: left;
    margin: 0 1rem;
    color: var(--color-dark-grey);
    font-family: var(--font-heading);
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    ::after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: var(--color-light-blue);
        transition: width 0.3s;
    }
    &:hover {
        color: var(--color-light-blue);
    }
    &:hover::after {
        width: 100%;
        transition: width 0.3s
    }

    @media ${screen.md} {
        line-height: 3rem;
        color: var(--color-black);
        font-size: 1.6rem;
        display: block;
        margin: 1rem 0;
        padding: 1rem 0;

        &:hover {
            color: var(--color-blue);
        }
    }
`
const NavPhone = styled.li`
    list-style-type: none;
    display: inline-block;
    text-align: left;
    margin: 0 1rem;
    padding: 1rem 2rem;
    color: var(--color-white);
    font-family: var(--font-heading);
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    background-color: var(--color-light-blue);
    transition: all 0.15s;
    border-radius: 3px;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: var(--color-dark-blue);
    }
    & a {
        color: var(--color-white);
        text-decoration: none;
    }

    @media ${screen.md} {
        line-height: 3rem;
        color: var(--color-white);
        font-size: 1.6rem;
        display: block;
        margin: 1rem 0;
    }
`
const NavBtn = styled.div`
    display: none;

    @media ${screen.md} {
        display: block;
        position: fixed;
        top: 1.5rem;
        right: 2rem;
        height: 3rem;
        width: 3rem;
        padding: 0;
        cursor: pointer;
    }
`

const Header = () => {
    const nav_ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = e => {
            if (!nav_ref.current.contains(e.target)) {
                const mobnav = document.getElementById('test-nav')
                mobnav.classList.remove('active')
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    })
    const handleMobileNav = () => {
        const mobnav = document.getElementById('test-nav')
        mobnav.classList.toggle('active')
    }
    return (
        <StyledHeader id="header" ref={nav_ref}>
            <Container>
                <Grid
                    columns="1fr 6fr"
                    columngap="1rem"
                    rowgap="5rem"
                    mobilerowgap="3rem"
                >
                    <Column align="center">
                        <Logo onClick={() => scrollTo('#hero')}>
                            <Image
                                width="170px"
                                img_name="lazicco-logo.png"
                                alt="B Lazic co LLC"
                            />
                        </Logo>
                    </Column>
                    <MainNav align="center" id="test-nav">
                        <Nav>
                            <NavLink
                                onClick={() => {
                                    scrollTo('#hero')
                                    handleMobileNav()
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollTo('#firm')
                                    handleMobileNav()
                                }}
                            >
                                Who we are
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollTo('#practice')
                                    handleMobileNav()
                                }}
                            >
                                Practice areas
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollTo('#credentials')
                                    handleMobileNav()
                                }}
                            >
                                Credentials
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scrollTo('#withus')
                                    handleMobileNav()
                                }}
                            >
                                Contact us
                            </NavLink>
                            <NavPhone><a href="tel:+35722283330">(+357) 22283330</a></NavPhone>
                        </Nav>
                    </MainNav>
                </Grid>
            </Container>
            <NavBtn onClick={handleMobileNav}>
                <Hamburger />
            </NavBtn>
        </StyledHeader>
    )
}

export default Header
