import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function PreactStars({ stars }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Welcome!
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <br />
      <Container>
        <Card>
          <Card.Body>
            <p>Preact has {stars} ⭐ stars</p>
            <Link href="/">
              <a>I bet Next.js has more stars (?)</a>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/preactjs/preact");
  const json = await res.json();

  return {
    revalidate: 10,
    props: {
      stars: json.stargazers_count,
    },
  };
}

export default PreactStars;
