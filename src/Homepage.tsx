import Page from "./Page";

const texts = {
  title: "Velkommen!",
}

const Homepage = () => {
  return (<Page>
    <h1>
      {texts.title}
    </h1>
  </Page>)
}

export default Homepage;
