import styled from 'styled-components'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpeg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'

export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${img1});
  }
  .colored:nth-child(2) {
    background-image: url(${img2});
  }
  .colored:nth-child(3) {
    background-image: url(${img3});
  }
  .colored:nth-child(4) {
    background-image: url(${img4});
  }
  .colored:nth-child(5) {
    background-image: url(${img5});
  }
  .colored:nth-child(6) {
    background-image: url(${img6});
  }
  .colored:nth-child(7) {
    background-image: url(${img7});
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #f8f8f8;
`
