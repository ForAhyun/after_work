import { getWeekdaysFromToday } from "../weekdays";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useState } from "react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { updateRateAsync } from "../../network/axios";

const Condition = ({data, indexId, isRating}) => {

    const weekday = getWeekdaysFromToday();
    //console.log("c index>>",indexId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [localRate, setLocalRate] = useState(data.rate);


    const handleStarClick = (isRating, index) => {
        if(isRating) {
            if (index + 1 === data.rate) {
                setLocalRate(index);
               
            } else {
                setLocalRate(index + 1);
            }
        }
    }

    const handleRateSaved = async() => {
        await dispatch(updateRateAsync(indexId, localRate));
        navigate("/");
    }
    
    return (
        <div>
            {weekday[indexId]} 
            {data.rate === 0 && !isRating ? '-' : (
                Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} onClick={() => handleStarClick(isRating, index)}>
                       {index < localRate ? <IoIosStar /> : <IoIosStarOutline />}
                    </span>
                ))
            )}
            
            {isRating ? (
                <div>
                    <button onClick={handleRateSaved}>저장</button>
                </div>
            ) : (
                <div>
                    <Link to={`/rating/${data.id}`}>
                    <button>수정</button>
                    </Link>
                </div>
            )}
        </div>
    )
};

export default Condition;