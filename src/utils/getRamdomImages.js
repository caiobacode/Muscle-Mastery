import img1 from '../media/form1.png'
import img2 from '../media/form2.png'
import img3 from '../media/form3.png'
import img4 from '../media/form4.png'

const allFormImages = [img1, img2, img3, img4]

const getRamdowImage = () => {
  const ramdowNumber = Math.floor(Math.random() * 4);
  return allFormImages[ramdowNumber]
}

export default getRamdowImage