import Page from "../../Page";
import Codebox from "./Codebox";

const texts = {
    title: 'Codebox'
}

const CodeboxPage = () => {
    return (<Page title={texts.title}>
        <h1>{texts.title}</h1>
        <Codebox />
        </Page>)
}

export default CodeboxPage;
