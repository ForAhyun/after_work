import axios from "axios";
import { fetchCondition, updateRate } from "../redux/slice/dayCondition";

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

  