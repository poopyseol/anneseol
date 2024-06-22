// === IMPORTS ============================
// Next
import Head from 'next/head'
// components
import { projects } from '../components/AppWrapper'
import Layout from "../components/Layout"
import Section from "../components/Section"
import ScrollContainer from '../components/ScrollContainer'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
// SVGs
import IllusArt from '../public/SVGs/home-art-illus.svg'
import IllusDesign from '../public/SVGs/home-design-illus.svg'
import IllusDev from '../public/SVGs/home-dev-illus.svg'



// === SECTIONS ===========================
const sections = [
    {heading: "Introduction", id: "intro"},
    {heading: "Selected Works", id: "works"}
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Anne SueYeun Seol - Designer, Developer, &amp; Artist</title>
                <meta
                    name="description"
                    content="I’m Anne SueYeun Seol, I'm an designer/artist from Korea, was in Montreal, and now in Vancouver. Love making fun designs and videos!"
                />
                <meta property="og:image" content="https://www.richardfxr.com/images/richardfxr-OGimage-2.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" conteddddnt="630" />
            </Head>

            <Layout heading="Hello" id="home">
                <Section sections={sections} index={0} first skipLinkHidden>
                    <ScrollContainer horizontal>
                        <ul className='row illus__list'>
                            <li className='illus__container'>
                                <IllusArt />
                            </li>
                            <li className='illus__container'>
                                <IllusDesign />
                            </li>
                            <li className='illus__container'>
                                <IllusDev />
                            </li>
                        </ul>
                    </ScrollContainer>
                    <p className="lg">I’m <em>Anne SueYeun Seol</em>, a <em>designer</em> / <em>artist</em> from Korea, was in Montreal, and now in Vancouver.</p>
                    <ul className='row md'>
                        <li><Button href='#works' target="_self" styling="sm colored"><span className='inter upDw pad--right'>↓</span> Works</Button></li>
                        <li><Button to='/about' styling="sm">About</Button></li>
                        <li><Button to='/about/resume' styling="sm">Résumé</Button></li>
                    </ul>
                </Section>

                <Section sections={sections} index={1} noAni>
                    <ul className='twoCol cards'>
                        {projects.slice(0, 6).map((project) => (
                            <li key={project.href}><ProjectCard {...project} /></li>
                        ))}
                    </ul>
                    <div id="moreWork" className="message">
                        <p className='md'>You can find <em>more work</em> on the projects page or view an index of all my work in the archive.</p>
                        <ul className='row md'>
                            <li><Button to='/projects#more' styling="sm">Projects</Button></li>
                            <li><Button to='/projects/archive' styling="sm">Archive</Button></li>
                        </ul>
                    </div>
                </Section>
            </Layout>
        </>
        
    )
}
