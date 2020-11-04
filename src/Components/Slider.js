import React from 'react';
import { Carousel } from 'react-bootstrap';
import sample from '../Resources/sample.jpg'
import sample2 from '../Resources/sample2.jpg'
import sample3 from '../Resources/sample3.jpg'

class Slider extends React.Component {


  render() {
    return (

      <Carousel className='m-10'>
        <Carousel.Item className='' style={{ 'heigth': '300px' }}>
          <img
            className='d-block w-75 m-auto'
            src={sample}
            alt='First slide' />
          <Carousel.Caption className='bg-dark p-3 border border-white rounded'>
            <h3>Этюды мемозойского периода</h3>
            <p>Ярким представителем произведений 2019-2020 годов, является серия холстов о простом русском пареньке с необычным именем Леонардо</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ 'heigth': '300px' }}>
          <img
            className='d-block w-75 m-auto'
            src={sample2}
            alt='First slide' />
          <Carousel.Caption className='bg-dark p-3 border border-white rounded'>
            <h3>Мурлыканье массажирует душу</h3>
            <p>Разумеется, нет ничего более постоянного, чем тема котиков в творчестве любого вида, которая находит отклик в нашем самом глубинном и потаённом</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ 'heigth': '300px' }}>
          <img
            className='d-block w-75 m-auto'
            src={sample3}
            alt='First slide' />
          <Carousel.Caption className='bg-dark p-3 border border-white rounded'>
            <h3>Сюжеты авторов-карантинников</h3>
            <p>Год Великого Карантина можно считать самым продуктивным за всю задокументированную историю мемологии, ведь, как говорят: "Праздные руки - мастерская дьявола."</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}

export default Slider;