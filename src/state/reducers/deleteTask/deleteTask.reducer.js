import {DELETED_TASK} from '../../actions/taskActions/taskActions';

const initialState = {
  task: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case DELETED_TASK: {
      //console.log('hi');
      //   console.log(
      //     'check',
      //     state.filter(element => element !== action.payload),
      //   );
      return state;
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
