import axios from "axios";
import { fetchCondition, updateRate } from "../redux/slice/dayCondition";

//  async function requestCondition(method='GET',url="/")  {
    
//     let response = null;

//     const instance = axios.create({
//         baseURL: 'http://localhost:5001/condition',
//     });

//     response = await instance.get(url);
//     console.log("response >> ",response);
//     return response.data;
    
// }

export const fetchConditionData = () => async dispatch => {
      const response = await axios.get('http://localhost:5001/condition');
      dispatch(fetchCondition(response.data));
  };

  export const updateRateAsync = (id, newRate) => async dispatch => {
    try {
        await axios.patch(`http://localhost:5001/condition/${id}`, { rate : newRate });
        dispatch(updateRate({ id, newRate }));
    } catch (error) {
        console.error('Error updating rate:', error);
    }
};

// export default requestCondition;
  