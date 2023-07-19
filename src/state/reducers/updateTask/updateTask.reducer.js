import {UPDATED_TASK} from '../../actions/taskActions/taskActions';

const initialState = {
  task: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATED_TASK: {
      return {
        state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
