import styled from 'styled-components'
import {
  Jumbotron, CardGroup, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap'

const Title = styled.h1`
  font-size: 78px;
  color: ${({ theme }) => theme.colors.primary};
`
const Image = styled.img`
height: 9rem;
margin-top: 0.1rem;

@media screen and (max-width: 480px){

  
}
`

export default function Home({ data }) {
  return (
    <div>
      <Jumbotron className="noBorder" >
        <Image src='logo.png' />
      </Jumbotron>
      <Container className="menu-cards">
        <CardGroup>
          {data.photos.map(photo => (
            <Card key={photo}>
              <CardImg top width="100%" src={photo} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Hamburguer Galo</CardTitle>
                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Galo</CardSubtitle> */}
                <CardText>Descrição rápida</CardText>
                <Button>Adicionar</Button>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </Container>

    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/menu')
  const data = await response.json()
  console.table(data);

  return {
    props: { data: data }
  }
}