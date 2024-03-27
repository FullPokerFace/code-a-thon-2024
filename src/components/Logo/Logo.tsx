import logo from './bee-mail.svg'
import { HFlex } from '../shared/Layout/Flex/Flex'
import './Logo.scss'

const Logo = () => {
    return (<HFlex className='logo'>
        <img src={logo} alt="ESI logo" />
        <p> beeMail </p>
    </HFlex>
    )
}

export default Logo
