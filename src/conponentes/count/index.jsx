import {useCount} from "../ hook/useCount"


// export const useCount = (initial = 0, min, max) => {
//   const [count, setCount] = useState<number>(initial);
//   useEffect(()=>{
//     if(!isNaN(+min)){
//       console.log("minimum is not a number")
//       }else{
//         initial=Math.max(initial,+min)}
//         },[min])

// }

const Count = () =>{
  const { cound, decrement,increment, reset} = useCount(1,0,10)

  return(
    <div className="contain-count">
      <h2>{cound}</h2>
      <button   onClick={increment}>+</button>
      <button onClick={decrement}> -</button>
      <button  onClick={reset}>Reset</button>
    </div>
  )
}

export default Count