import { Container } from '@material-ui/core'

function Home() {
  const imageDataURL = sessionStorage.getItem("recent-image");

  return (
    <Container>
      <h1>Hello World! You are on the Home Page!</h1>
      {imageDataURL ?
        <img src={imageDataURL} />
        : null}
    </Container>
  );
}

export default Home;