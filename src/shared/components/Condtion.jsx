import { getWeekdaysFromToday } from "../weekdays";
import Star from "./Star";
import { Link } from "react-router-dom";

const Condition = ({data, index, isRating}) => {

    const weekday = getWeekdaysFromToday();
    
    return (
        <div>
            {weekday[index]} 
            <Star rate={data.rate} isRating={isRating} conditionIndex={index}/>
            
            {isRating ? (
                <div>
                    <button>저장</button>
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