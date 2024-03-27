import { Box } from "@mui/material"
import { HFlex } from "../Layout/Flex/Flex"
import './Panel.scss'

type IProps = {
    children: any
}

export const Panel = ({ children }: IProps) => {
    return (
        <Box border={'solid 1px #e7eaee'} borderRadius={2} bgcolor={'#f3f5f7'} p={2}>{children}</Box>
    )
}
export const HPanel = ({ children }: IProps) => {
    return (
        <HFlex className='panel'>{children}</HFlex>
    )
}
export const VPanel = ({ children }: IProps) => {
    return (
        <Box display={'flex'} flexDirection={"column"} alignItems={'center'} gap={2} border={'solid 1px #e7eaee'} borderRadius={2} bgcolor={'#f3f5f7'} p={2}>{children}</Box>
    )
}
