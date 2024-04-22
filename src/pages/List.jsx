import Condition from "../shared/components/Condtion";
import {useSelector, useDispatch} from 'react-redux';
import { fetchConditionData } from "../network/axios";
import { useEffect } from 'react';
import Header from "../shared/components/Header";

const List = () => {

    const { conditionData } = useSelector(state => state.dayCondition);
    const dispatch = useDispatch();
    // console.log("list conditiondata >>",conditionData);

    useEffect(() => {
        dispatch(fetchConditionData());
    }, [dispatch]);

    return (
        <div>
           <Header/>
            {conditionData.map((data) => (
                    <Condition data={data} indexId={data.id} isRating={false}/>
            ))}
        </div>
    )
};

export default List;