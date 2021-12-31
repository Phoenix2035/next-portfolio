import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
    return <Container  >
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center" userSelect="none">
            Hello I&apos;m a frontend developer based in Iran!
        </Box>

        <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Ali Ghodoosi
                </Heading>
                <p>
                    Programmer Lover (Developer with ❤)
                </p>
            </Box>
        </Box>
    </Container>
}

export default Page