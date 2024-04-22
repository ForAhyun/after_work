import {useParams} from 'react-router-dom';
import Condition from '../shared/components/Condtion';
import {useSelector} from 'react-redux';
import Header from '../shared/components/Header';



const Rating = () => {

    const { id } = useParams();
    const conditionData = useSelector(state => state.dayCondition.conditionData);
    const detailData = conditionData.find(condition => condition.id === id);
    //console.log("detail data>>",detailData);

    return (
        <>
            <Header indexId={id}/>
            <Condition data={detailData} indexId={id} isRating={true}/>
        </>
    )
};

export default Rating;