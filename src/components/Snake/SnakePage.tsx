import SnakeGame from "./SnakeGame";
import Page from "../../Page";

const texts = {
    title: 'Snake!'
}

const SnakePage = () => {
    return (<Page title={"Snake"}>
        <h1>{texts.title}</h1>
        <SnakeGame />
        </Page>)
}

export default SnakePage;
