import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'



const Portfolio = () => {
  return (
    <Layout title="Portfolio">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          Code
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="nole-patrol"
              title="Nole Patrol"
            >
              Data breach search engine for FSU emails
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="happy-cat"
              title="Happy Cat"
            >
              Bash script that motivates you
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <WorkGridItem
              id="link-page-app"
              title="Personal Link Page"
            >
              Link-in-bio app
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="fileoperator"
              title="fileoperator"
            >
              Python file operations package
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="drako"
              title="Drako"
            >
              A better linux mkdir command
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="shush"
              title="Shush"
            >
              A CLI tool to silence any output
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="nvim-fountain"
              title="Neovim Fountain"
            >
              An updated Neovim plugin to write screenplays from neovim
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="catppuccin-image-converter"
              title="Catppuccin Image Converter"
            >
              A WebApp to apply a pastel filter on any image
            </WorkGridItem>
          </Section>

        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
