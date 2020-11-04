import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Jumbotron from '../Components/Jumbotron';
import Slider from '../Components/Slider';
import sample from '../Resources/sample.jpg';
import sample2 from '../Resources/sample2.jpg';
import sample3 from '../Resources/sample3.jpg';
import sample4 from '../Resources/sample4.jpg';
;
class Home extends React.Component {

  render() {
    return (
      <>
        <Slider />
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem', }}>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={sample} />
                <Card.Body>
                  <Card.Title>Лёнчик, жги!</Card.Title>
                  <Card.Text>
                    Что-бы не мучаться от похмелья, нужно...
                  </Card.Text>
                  <Button variant='primary'>Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={sample2} />
                <Card.Body>
                  <Card.Title>Языковые курсы</Card.Title>
                  <Card.Text>
                    А ты знал, что в Малайзии звук "Ъ" произносится как...
                  </Card.Text>
                  <Button variant='primary'>Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={sample3} />
                <Card.Body>
                  <Card.Title>Божеские штрафы</Card.Title>
                  <Card.Text>
                    Группа граждан без определённого места жительства была замечена за...
                  </Card.Text>
                  <Button variant='primary'>Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Jumbotron />
        <Container style={{ marginBottom: '30px' }}>
          <Row>
            <Col md={7}>
              <img src={sample4} height={400} />
            </Col>
            <Col md={5}>
              <h2>Инновационные подходы.</h2>
              <p>
                Разнообразный и богатый опыт новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующих условий активизации. Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности требует определения и уточнения дальнейших направлений развития проекта? Дорогие друзья, сложившаяся структура организации напрямую зависит от всесторонне сбалансированных нововведений.
                Практический опыт показывает, что начало повседневной работы по формированию позиции в значительной степени обуславливает создание всесторонне сбалансированных нововведений! Дорогие друзья, реализация намеченного плана развития требует от нас анализа дальнейших направлений развитая системы массового участия. Равным образом постоянный количественный рост и сфера нашей активности обеспечивает актуальность направлений прогрессивного развития. Практический опыт показывает, что дальнейшее развитие различных форм деятельности позволяет выполнить важнейшие задания по разработке экономической целесообразности принимаемых решений!
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}


export default Home;