import { Box, Container, Heading, Image, Button, Link, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"


import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"


const Page = () => {
    return (
        <Container  >
            <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center" userSelect="none">
                Hello I&apos;m a frontend developer based in Iran!
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" userSelect="none">
                        Ali Ghodoosi
                    </Heading>
                    <p>
                        Programmer Lover (Developer with ❤)
                    </p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
                    <Image src="/images/profile.jpg" maxWidth="100px" display="inline-block" borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" borderRadius="full" alt="profile" />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>I&apos;m a Frontend developer located in Iran. I love to create simple yet beautiful websites with
                    great user experience.
                    I&apos;m interested in the whole Frontend stack Like trying new things and building great projects. I
                    love to see movies and read books.
                    I believe everything is an Art when you put your consciousness in it. &nbsp;
                    <NextLink href="/works/inkdrop">
                        <Link>
                            Inkdrop
                        </Link>
                    </NextLink>.
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon colorSchema="teal" />}>
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1991</BioYear>
                    Born in Kermanshah, Iran.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Frontend Developer at Armaghan.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Maktab Sharif Bootcamp (Teaching)
                </BioSection>

                <BioSection>
                    <BioYear>2021</BioYear>
                    Freelance
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I <span style={{color:"#f00"}}>❤</span>
                </Heading>
                <Paragraph>
                    Music, Playing, Series, Reading
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page