import { useLocation } from 'react-router-dom';
import { getWeekdaysFromToday } from '../weekdays';
import styled from 'styled-components';


const Header = ({indexId}) => {

    const location = useLocation();
    const weekday = getWeekdaysFromToday();
    let headerContent = '';

    if (location.pathname === '/') {
      headerContent = <HeaderText>일주일 컨디션</HeaderText>;
    } else {

      headerContent = <HeaderText>{weekday[indexId]}요일 평점 매기기</HeaderText>; 
    }
    return (
        <HeaderContainer>
            {headerContent}
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderText = styled.h3`
    color: #424242;
`;