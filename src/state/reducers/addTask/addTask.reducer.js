import {ADDED_TASK} from '../../actions/taskActions/taskActions';

const initialState = {
  task: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADDED_TASK: {
      console.log('reducer', action);
      return {
        ...state,
        task: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
