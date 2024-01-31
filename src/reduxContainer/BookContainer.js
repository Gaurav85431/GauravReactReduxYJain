import { useDispatch, useSelector } from "react-redux";
import purchase_book from "./BookAction";


const BookContainer = () => {

  // Hm useSelector ka use karenge bcz hmara jo store hia usme hmara jo state hai, state kiya hia hamre us application me at present uska access chahiye hmare es container (BookContainer ) me 


  // hamare application ka state NumberOfBook me store hai.
  // useSelector(state => state.NumberOfBooks)
  // to hmara jo selector function hai wo ek value return kri, ab jo value return hui hai, wahi value hmara useSelector Hook return karata hai. To isko hm 1 variable me store kra lenge.

  const noOfBooks = useSelector(state => state.NumerOfBooks)



  // ------------------- useDispatch ---------------------------

  const dispatch = useDispatch()



  return (<>
    <h1>BookContainer</h1>
    <h2>No. of books are {noOfBooks} </h2>



    <button onClick={() => { dispatch(purchase_book()) }}>Buy Book</button>
    {/* hmne 1 button banayi hai jiske click se hm chahte hia ki jo hmari store hia  usme se book buy kar saken, aur hmara store me count kam hona chahiye .*/}


  </>)
  // to hmne useSelector ka use karke  hm BookReducer me jo hmara state hai hm usko BookContainer component me use kar paayen
}
export default BookContainer;