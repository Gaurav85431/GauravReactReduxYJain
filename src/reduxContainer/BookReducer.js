import { buyBook } from "./BookTypes"

const initialStates = {
  NumerOfBooks: 20
}

// define reducer

const BookReducer = (state = initialStates, action) => {
  // state ka hmne bydefault value set kar diya i.e. initialState

  // we will make switch case bccz ki hmare different type ke actions ho sakte hia, to kab kis requirement me kis type ka action ko perform karna hai, iske liye hme different different function likhne ki need nhi hai.

  switch (action.type) {    // jis v type ka hmara action hoga hm usko accept karenge.

    case buyBook: return {
      ...state, NumerOfBooks: state.NumerOfBooks - 1
    }
    // agar buyBook hia action type to hm return ker denge current state(i.e. state) aur ise update kr denge i.e. No.OfBooks -1 se.


    // To hmne state ko update kiya reducer ke through, reducer ne action ka kehna maana. Action ka type aaya thha BookType se jo export kiye thhe wha se jo ki ke rha thha buy book. Tb reducer ne us actin ko accept kiiya aur reducer ne store me se no. of books ko 1 se nkam kiya.


    // case saleBook: return {
    //   ...state, NumerOfBooks: state.NumerOfBooks + 1
    // }



    default: return state;
    // if any case not match to original state reurn


  }



}

export default BookReducer;