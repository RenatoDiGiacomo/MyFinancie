import FooterStyle from "./style/FooterStyleComponent"

function FooterComponent() {
    const dataItem = new Date()
    const dataYear = dataItem.getFullYear()

    return (
        <FooterStyle>
            <span>
                Desenvolvido por <span>Renato Di Giacomo</span>  <span>{dataYear}</span>
            </span>
        </FooterStyle>
    )
}

export default FooterComponent