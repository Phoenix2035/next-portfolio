import { Box, Container, Heading, Image, Button, Link, List, ListItem, Icon, useColorModeValue } from "@chakra-ui/react"
import { IoLogoGithub, IoLogoLinkedin, IoPhonePortraitSharp,IoDownloadSharp } from "react-icons/io5"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';



import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import { Gmail } from "../components/gmail-svg"




const Page = () => {
    const notifyPhone = () => toast.success("Phone Copied Successfully");
    const notifyGmail = () => toast.success("Gmail Copied Successfully");

    const copyPhoneToClipboard = () => {
        notifyPhone();
    };

    const copyGmailToClipboard = () => {
        notifyGmail();
    };


    return (
        <Layout>
            <Container  >
                <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center" userSelect="none">
                    Hello I&apos;m a frontend developer from Iran!
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
                        About Me
                    </Heading>
                    <Paragraph>I&apos;m a Frontend developer located in Iran. I love to create simple yet beautiful websites with
                        great user experience.
                        I&apos;m interested in the whole Frontend stack Like trying new things and building great projects. I
                        love to see movies and read books.
                        I believe everything is an Art when you put your consciousness in it. &nbsp;
                    </Paragraph>

                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Experience
                    </Heading>
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
                        Skills
                    </Heading>
                    <BioSection>
                        <BioYear>Html</BioYear>
                    </BioSection>
                    <BioSection>
                        <BioYear>Css</BioYear>
                    </BioSection>
                    <BioSection>
                        <BioYear>Javascript</BioYear>
                    </BioSection>
                    <BioSection>
                        <BioYear>React</BioYear>
                    </BioSection>
                    <BioSection>
                        <BioYear>Typescript</BioYear>
                    </BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Resume
                    </Heading>
                    <BioSection>
                        <Link href="http://www.upsara.com/images/j115291_.pdf">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoDownloadSharp} />}>
                                Download Resume
                            </Button>
                        </Link>
                    </BioSection>
                    
                </Section>

                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        I <span style={{ color: "#f00" }}>❤</span>
                    </Heading>
                    <Paragraph>
                        Music, Playing, Series, Reading
                    </Paragraph>
                </Section>

                <Section delay={0.6}>
                    <Heading as="h3" variant="section-title">
                        Contact Me
                    </Heading>
                    <List>
                        <ListItem>
                            <CopyToClipboard text={"+989917240664"}>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoPhonePortraitSharp} />} onClick={copyPhoneToClipboard}>
                                    +989917240664 (click me for copy)
                                </Button>
                            </CopyToClipboard>
                        </ListItem>

                        <ListItem>
                            <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                draggable
                                pauseOnHover={false}
                            />
                            <CopyToClipboard text={"aligodosi@gmail.com"}>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={Gmail} />} onClick={copyGmailToClipboard}>
                                    Gmail (click me for copy)
                                </Button>
                            </CopyToClipboard>
                        </ListItem>

                        <ListItem>
                            <Link href="https://github.com/masturdating1991" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    Github
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://www.linkedin.com/in/ali-ghodousi" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Linkedin
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page