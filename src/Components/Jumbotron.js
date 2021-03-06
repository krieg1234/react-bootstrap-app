import React from 'react';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import bgImg from '../Resources/bg.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${bgImg}) no-repeat fixed top;
    background-size: cover;
    color: #efefef;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

`;


class Jumbotron extends React.Component {


  render() {
    return (
      <Styles>
        <Jumbo fluid className='jumbo'>
          <div className='overlay'></div>
          <Container>
            <h1>Слово о Полку Игореве Игоря сына Святъславля внука Ольгова</h1>
            <p>Не лeпо ли ны бяшетъ братіе, начати
            старыми словесы трудныхъ повeстій
            о полку Игоревe, Игоря Святъ славича?
            Начатижеся тъ пeсни по былинамъ
            сего времени, а не по замышленію Бояню.
            Боянъ бо вeщій, аще кому хотя
            ше пeснe творити, то растекашется
            мыслію по древу, сeрымъ
            волкомъ по земли, шизымъ орломъ
            подъ облакы. Помняшетъ бо рeчь
            первыхъ временъ усобицe. Тогда
            пущашеть 10ть соколовъ на стадо
            лебедей. Который дотечаше та
            преди пeснe пояше, старому Ярославу,
            храброму Мстиславу, иже
            зарeза Редедю предъ полкы Ко сожь
            скыми, красному Романови Святъславличю.
            Боянъ же братіе не 10ть
            соколовъ на стадо лебедей пущаше,
            нъ своя вeщіа пръ сты наживая
            струны въ складаше; ониже сами
            Княземъ славу рокотаху. Почнемъ
            же братіе повeсть сію отъ
            стараго владимера до нынeшняго
            Игоря. Иже истягну умъ крeпостію
            своею, и по остри сердца своего
            мужествомъ, напо лнився ратного духа,
            наведе своя храбрыя полкы на землю
            Половецькую за землю Руськую. Тогда
            Игорь въ зрe1 на свeтлое солнце, и видe
            отъ него тьмою вся своя воя прикрыты,
            и рече Игорь къ дружинe своей: братіе
            и дружино! Луцежъ бы потяту быти,
            неже полонену быти: авсядемъ братіе
            на свои бързыя комони2, да позримъ
            синего Дону. Спала князю умъ по
            хоти, и жало сть ему знаменіе заступи
            искусити Дону великаго.
            Хощу бо, рече, копіе приломити конець
            поля Половецкого съ вами Русици,
            хощу главу свою приложити, а
            любо испити Шеломомь Дону.
            О Бояне соловію старого времени!
            абы ты сіа полкы ущекоталъ, скача
            славію по мыслену древу, летая умом
            подъ облакы, свивая славы оба полы
            сего времени, рища въ тропу Трояню
            чресъ поля на горы? Пeти
            было пeснe Игореви, того (Ольга)
            внуку. Небуря соколы занесе чрезъ
            поля широкая; Галици стады
            бeжать къ Дону великому; чили
            въ спeти было вeщей Бояне велесовъ
            внуче: комони ржуть за Сулою;
звенить слава въ Кыевe.</p>
          </Container>
        </Jumbo>
      </Styles>

    )
  }
};

export default Jumbotron;