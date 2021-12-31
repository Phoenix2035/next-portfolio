import NextLink from "next/link"
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import Logo from "./logo"


const LinkItem = ({ path, href, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")

    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? "glassTeal" : undefined} color={active ? "#202023" : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box as="nav" w="100%" position="fixed" bg={useColorModeValue("#ffffff40", "#20202380")} style={{ backdropFilter: "blur(10px)" }} zIndex={1} {...props}>
            <Container maxW="container.md" display="flex" wrap="wrap" p={2} align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tighter">
                        <Logo />
                    </Heading>
                </Flex>
                <Stack width={{ base: "full", md: "auto" }} direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
                    <LinkItem href="/works" path={path}>Works</LinkItem>
                    <LinkItem href="/projects" path={path}>Projects</LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>

                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>

                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>


                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar