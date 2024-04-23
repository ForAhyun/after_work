import {useParams} from 'react-router-dom';
import Condition from '../shared/components/Condtion';
import {useSelector} from 'react-redux';
import Header from '../shared/components/Header';
import styled from 'styled-components';


const Rating = () => {

    const { id } = useParams();
    const conditionData = useSelector(state => state.dayCondition.conditionData);
    const detailData = conditionData.find(condition => condition.id === id);
    //console.log("detail data>>",detailData);

    return (
        <RatingContainer>
            <Header indexId={id}/>
            <Condition data={detailData} indexId={id} isRating={true}/>
        </RatingContainer>
    )
};

export default Rating;

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    height: 50vh;
`;