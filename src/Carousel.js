import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const items = [
  {
    src: '/pizza_shots/01_sorbillo.jpg',
    caption: 'Sorbillo'
  },
  {
    src: '/pizza_shots/02_and_12_prince.jpg',
    caption: 'Prince St'
  },
  {
    src: '/pizza_shots/03_keste_1.jpg',
    caption: 'Kesté'
  },
  {
    src: '/pizza_shots/03_keste_2.jpg',
    caption: 'Kesté'
  },
  {
    src: '/pizza_shots/03_keste_3.jpg',
    caption: 'Kesté'
  },
  {
    src: '/pizza_shots/04_emilys_1.jpg',
    caption: 'Emily\'s'
  },
  {
    src: '/pizza_shots/04_emilys_2.jpg',
    caption: 'Emily\'s'
  },
  {
    src: '/pizza_shots/05_andpizza_1.jpg ',
    caption: '&Pizza'
  },
  {
    src: '/pizza_shots/05_andpizza_2.jpg ',
    caption: '&Pizza'
  },
  {
    src: '/pizza_shots/05_andpizza_3.jpg ',
    caption: '&Pizza'
  },
  {
    src: '/pizza_shots/06_lombardis_1.jpg',
    caption: 'Lombardi\'s (Delivered)'
  },
  {
    src: '/pizza_shots/06_lombardis_2.jpg',
    caption: 'Lombardi\'s (Delivered)'
  },
  {
    src: '/pizza_shots/07_rubirosa_1.jpg',
    caption: 'Rubirosa'
  },
  {
    src: '/pizza_shots/07_rubirosa_2.jpg',
    caption: 'Rubirosa'
  },
  {
    src: '/pizza_shots/07_rubirosa_3.jpg',
    caption: 'Rubirosa'
  },
  {
    src: '/pizza_shots/08_johns_1.jpg',
    caption: 'John\'s of Bleecker Street'
  },
  {
    src: '/pizza_shots/08_johns_2.jpg',
    caption: 'John\'s of Bleecker Street'
  },
  {
    src: '/pizza_shots/09_pasquale_1.jpg',
    caption: 'Pasquale Jones'
  },
  {
    src: '/pizza_shots/09_pasquale_2.jpg',
    caption: 'Pasquale Jones'
  },
  {
    src: '/pizza_shots/09_pasquale_3.jpg',
    caption: 'Pasquale Jones'
  },
  {
    src: '/pizza_shots/10_martina_1.jpg',
    caption: 'Martina'
  },
  {
    src: '/pizza_shots/10_martina_2.jpg',
    caption: 'Martina'
  },
  {
    src: '/pizza_shots/10_martina_3.jpg',
    caption: 'Martina'
  },
  {
    src: '/pizza_shots/11_song_1.jpg',
    caption: 'Song \'E Napule'
  },
  {
    src: '/pizza_shots/11_song_2.jpg',
    caption: 'Song \'E Napule'
  },
  {
    src: '/pizza_shots/11_song_3.jpg',
    caption: 'Song \'E Napule'
  },
  {
    src: '/pizza_shots/11_song_4.jpg',
    caption: 'Song \'E Napule'
  },
  {
    src: '/pizza_shots/13_joe_1.jpg',
    caption: 'Joe and Pat\'s'
  },
  {
    src: '/pizza_shots/13_joe_2.jpg',
    caption: 'Joe and Pat\'s'
  },
  {
    src: '/pizza_shots/13_joe_3.jpg',
    caption: 'Joe and Pat\'s'
  },
  {
    src: '/pizza_shots/13_joe_4.jpg',
    caption: 'Joe and Pat\'s'
  }
]

const Carousel = () => <UncontrolledCarousel items={ items } />

export default Carousel
