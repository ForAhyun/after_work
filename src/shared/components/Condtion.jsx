import { getWeekdaysFromToday } from "../weekdays";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useState, useEffect } from "react";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { updateRateAsync } from "../../network/axios";
import styled from 'styled-components';
import Toast from "./Toast";

const Condition = ({data, indexId, isRating}) => {

    const weekday = getWeekdaysFromToday();
    //console.log("c index>>",indexId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [localRate, setLocalRate] = useState(data.rate);
    const [showToast, setShowToast] = useState(false); 
    const [toastMessage, setToastMessage] = useState(''); 


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

        setShowToast(true);
        setToastMessage('평점이 입력되었습니다.'); 
        setTimeout(() => {
            setShowToast(false); 
        }, 1500); 
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const rating = Number(event.key);
            if (isRating && rating >= 0 && rating <= 5) {
                setLocalRate(rating);
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isRating]);
    
    return (
        <Container>
            <Day>
                {weekday[indexId]} 
            </Day>
            
            
            {data.rate === 0 && !isRating 
            ? <ZeroStar>-</ZeroStar> 
                : (
                Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                        key={index} 
                        onClick={() => handleStarClick(isRating, index)}    
                    >
                       {index < localRate ? <IoIosStar /> : <IoIosStarOutline />}
                    </Star>
                ))
            )}
            
            {isRating ? (
                <>
                <SavedBtn>
                    <Btn onClick={handleRateSaved}>저장하기</Btn>
                </SavedBtn>
                <BackBtn onClick={() => {
                    navigate(-1);
                }}>뒤로가기</BackBtn>
                </>
            ) : (
                <ButtonContainer>
                    <Link to={`/rating/${data.id}`}>
                    <Btn>수정</Btn>
                    </Link>
                </ButtonContainer>
            )}
            {showToast && <Toast message={toastMessage} />} 
        </Container>
    )
};

export default Condition;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Day = styled.div`
    font-size: 1.2rem;
    margin: 15px 25px;
    padding1: 10px;
    color: #424242;
`;

const ButtonContainer = styled.div`
`;

const SavedBtn = styled.div`
`;

const Btn = styled.button`
    width: 80px;
    height: 40px;
    border: none;
    color: white;
    background-color: black;
    margin: 10px 20px;
    padding : 5px;
    cursor: pointer;
`;

const BackBtn = styled.button`
    width: 80px;
    height: 40px;
    border: none;
    cursor: pointer;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 400px;
`;

const Star = styled.span`
    font-size: 40px;
    margin: 5px
`;

const ZeroStar = styled.span`
    font-size: 35px;
    align-items: center;
    margin: 0 118px;
`;