const texts = {
    title: "Velkommen!",
}

const Homepage = () => {
    return (<>
        <h1>
            {texts.title}
        </h1>

        <a href={'/snake'}>
            Snake!
        </a>
    </>)
}

export default Homepage;
