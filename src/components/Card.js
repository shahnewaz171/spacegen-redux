import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/reducersActions/counterReducer';

const Card = () => {
    const count = useSelector((state) => state.counter);
    console.log(count);

    const dispatch = useDispatch();

    return (
        <div className="mb-5">
            <div>count - {count.count}</div>
            <button type="button" onClick={() => dispatch(increment())} >Increment</button>
            <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Card;