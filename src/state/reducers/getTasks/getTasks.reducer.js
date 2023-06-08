import {GOT_TASK} from '../../actions/taskActions/taskActions';

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GOT_TASK: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    default: {
      return {...state};
    }
  }
}
