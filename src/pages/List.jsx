import Condition from "../shared/components/Condtion";
import {useSelector, useDispatch} from 'react-redux';
import { fetchConditionData } from "../network/axios";
import { useEffect } from 'react';

const List = () => {

    const { conditionData } = useSelector(state => state.dayCondition);
    const dispatch = useDispatch();
    // console.log("list conditiondata >>",conditionData);

    useEffect(() => {
        dispatch(fetchConditionData());
    }, [dispatch]);

    return (
        <div>
            <h3>
                일주일 컨디션
            </h3>
            {conditionData.map((data) => (
                    <Condition data={data} indexId={data.id} isRating={false}/>
            ))}
        </div>
    )
};

export default List;