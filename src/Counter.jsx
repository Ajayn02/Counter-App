import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum } from './redux/counterSlice';

function Counter() {
  const count=useSelector((state)=>state.counterReducer.counter)
  // console.log(count);

  const dispatch=useDispatch()

  const [num,setNum]=useState(0)
  

  return (
    <>
        <div className='d-flex justify-content-center align-items-center p-5' style={{height:'80vh'}}>
            <div className='w-75 border border-3 border-light p-5'>
                <h3 className='text-danger text-center'>Couter</h3>
                <h2 className='text-center text-light'>{count}</h2>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success me-4 px-2' onClick={()=>{dispatch(increment())}}>+ Increment</button>
                    <button className='btn btn-info me-4 px-2 ' onClick={()=>dispatch(decrement())}>- Decrement</button>
                    <button className='btn btn-warning px-4 ' onClick={()=>{dispatch(reset())}}>Reset</button>
                </div>
                <div className='d-flex justify-content-around my-3'>
                  <input type="number" placeholder='Enter a Number' className='form-control' onChange={(e)=>{setNum(e.target.value)}} />
                  <button className='btn btn-info ms-1' onClick={()=>{dispatch(countWithNum(num))}}>Count</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter