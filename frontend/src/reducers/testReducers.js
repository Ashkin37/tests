import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../constants/testConstants';

export const testListReducer = (state = { tests: [] }, action) => {
  switch (action.type) {
    case TEST_LIST_REQUEST:
      return { loading: true, tests: [] }
    case TEST_LIST_SUCCESS:
      return {
        loading: false,
        testss: action.payload.tests,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case TEST_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
