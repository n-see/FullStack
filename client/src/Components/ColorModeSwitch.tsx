import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"


const ColorModeSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <>
            <HStack>
                <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                {colorMode === 'dark' ? <Text whiteSpace={'nowrap'}><MoonIcon/>Dark Mode</Text> : <Text whiteSpace={'nowrap'}><SunIcon/>Light Mode</Text>}

            </HStack>
        </>
    )
}

export default ColorModeSwitch