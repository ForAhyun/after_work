export const getWeekdaysFromToday = () => {
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const todayIndex = new Date().getDay(); 
  
    let result = [];
    for (let i = 0; i < weekdays.length; i++) {
        result.push(weekdays[(todayIndex + i) % 7]);
    }
    return result;
}