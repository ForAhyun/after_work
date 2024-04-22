import { useLocation } from 'react-router-dom';
import { getWeekdaysFromToday } from '../weekdays';

const Header = ({indexId}) => {

    const location = useLocation();
    const weekday = getWeekdaysFromToday();
    let headerContent = '';

    if (location.pathname === '/') {
      headerContent = <h3>일주일 컨디션</h3>;
    } else {

      headerContent = <h3>{weekday[indexId]}요일 평점 매기기</h3>; // 다른 경로에 대한 기본 헤더
    }
    return (
        <header>
            {headerContent}
        </header>
    )
};

export default Header;