// import { IoIosStarOutline, IoIosStar } from "react-icons/io";
// import { useState } from "react";
// import {useDispatch, useSelector} from 'react-redux';
// import { updateRate } from "../../redux/slice/dayCondition";

// const Star = ({rate, isRating, conditionIndex}) => {

//     //const [rating, setRating] = useState(rate);
//     const dispatch = useDispatch();
//     const [localRate, setLocalRate] = useState(rate);
//     //const { conditionData } = useSelector(state => state.dayCondition);
//     //console.log("start index>>",conditionIndex)
//     // const handleClick = (isRating, index) => {
//     //     if(isRating) {
//     //         if (index + 1 === rate) {
//     //             dispatch(updateRate({ id: conditionIndex , rate: index}));
//     //             setLocalRate(index);
               
//     //         } else {
//     //             dispatch(updateRate({ id: conditionIndex, rate: index + 1 }));
//     //             setLocalRate(index + 1);
//     //         }
//     //     }
//     // }
//     return (
//         <div>
//                 {/* {rate === 0 ? '-' : (
//                 Array.from({ length: 5 }).map((_, index) => (
//                     <span key={index} onClick={() => handleClick(isRating, index)}>
//                        {index < localRate ? <IoIosStar /> : <IoIosStarOutline />}
//                     </span>
//                 ))
//             )} */}
//         </div>
//     )
// };

// export default Star;