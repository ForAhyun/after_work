import Condition from "../shared/components/Condtion";
import {useSelector, useDispatch} from 'react-redux';
import { fetchConditionData } from "../network/axios";
import { useEffect } from 'react';
import Header from "../shared/components/Header";
import styled from 'styled-components';


const List = () => {

    const { conditionData } = useSelector(state => state.dayCondition);
    const dispatch = useDispatch();
    // console.log("list conditiondata >>",conditionData);

    useEffect(() => {
        dispatch(fetchConditionData());
    }, [dispatch]);

    return (
        <ListContainer>
           <Header/>
            {conditionData.map((data) => (
                    <Condition data={data} indexId={data.id} isRating={false}/>
            ))}
        </ListContainer>
    )
};

export default List;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    height: 70vh;
`;
