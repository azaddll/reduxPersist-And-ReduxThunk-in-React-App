import React, {  useEffect } from 'react'
import './../App.css';
import { useSelector } from 'react-redux';
import { getUsersList, setUserName } from '../redux/actions';
import { useDispatch } from 'react-redux/es/exports';

function Product() {

    useEffect(() => {
      
        dispatch(getUsersList());
    }, [])
    

    const userName = useSelector(state => state.user.userName);
    const dispatch = useDispatch();


  return (
    <div className='card'>
        <div className='card-header text-dark'>ProductComponent</div>
        <div className='card-body'>
            <h3 className='text-danger'>
                {userName}
            </h3>

            <button onClick={()=> dispatch(setUserName('azad'))} className='btn btn-danger'>SetNewName</button>

            
        </div>
    </div>
  )
}






export default Product