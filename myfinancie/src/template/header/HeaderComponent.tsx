import HeaderStyle from './style/HeaderStyleComponent'
import Logo from '../../assets/logo.svg'


function HeaderComponent() {
    return (
        <HeaderStyle>
            <img src={Logo} alt="" />
            <h1 id='Title'>Home</h1>
        </HeaderStyle>
    )
}

export default HeaderComponent