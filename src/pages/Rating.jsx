import {useParams} from 'react-router-dom';
import Condition from '../shared/components/Condtion';
import {useSelector} from 'react-redux';


const Rating = () => {

    const { id } = useParams();
    const conditionData = useSelector(state => state.dayCondition.conditionData);

    const detailData = conditionData.find(condition => condition.id === id);
    console.log("detail data>>",detailData);

    return (
        <>
            <Condition data={detailData} indexId={id} isRating={true}/>
        </>
    )
};

export default Rating;