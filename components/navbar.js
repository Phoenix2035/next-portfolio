import {
    Container,
    Box,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'

import Logo from './logo'


const Navbar = props => {

    return (
        <Box
            w="100%"
            position="fixed"
            as="nav"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

            </Container>
        </Box>
    )
}

export default Navbar
