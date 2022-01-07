import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  height: 30px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
    margin-right:0.5rem;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="logo" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                        userSelect="none"
                    >
                        Ali Ghodoosi
                    </Text>
                </LogoBox>
    )
}

export default Logo
