import SnakeGame from "./SnakeGame";
import Page from "../../Page";

const SnakePage = () => {
    return (<Page title={"Snake"}>
        <h1>Snake!</h1>
        <SnakeGame />
        </Page>)
}

export default SnakePage;
