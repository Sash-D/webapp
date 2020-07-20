import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Hero from '../components/elements/hero'
import Intro from '../components/elements/intro'
import Firm from '../components/elements/firm'
import Practice from '../components/elements/practice'
import Clients from '../components/elements/clients'
import Credentials from '../components/elements/credentials'
import Contact from '../components/elements/contacts'

const Home = () => (
    <>
        <Layout>
            <SEO title="Welcome" />
            <Hero />
            <Intro />
            <Firm />
            <Clients />
            <Practice />
            <Credentials />
            <Contact />
        </Layout>
    </>
)

export default Home
