//      ----------------------- 1st way-------------------------------
/*
// BookAction hai action creator, Action creator hmare function hote hia jo ki hmarare action return krte hia.
const purchase_book = () => {
  // purchase_book hmara function hai jo ki hme return karega action. Action hote hia hmare javascript ke object. 
  // Es object ke under type naam ke prop return krti hai, jo ki ek string value contain karti hai jo ki hme batati hia ki hme kis type ka actin perform karna hai

  return {
    type: 'buyBook'
  }

}

*/


// ----------------------------------- 2nd way-------------------------------------
import { buyBook } from "./BookTypes"

const purchase_book = () => {

  return {
    type: buyBook
  }

}
export default purchase_book;