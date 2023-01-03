import { AnyAction } from "redux";
import { BreadcrumbSliceState } from "@/store/interface";
import produce from "immer";
import * as types from "@/store/mutation-types";

const BreadcrumbSliceState: BreadcrumbSliceState = {
	breadcrumbList: {}
};

// breadcrumb reducer
const breadcrumb = (state: BreadcrumbSliceState = BreadcrumbSliceState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_BREADCRUMB_LIST:
				draftState.breadcrumbList = action.breadcrumbList;
				break;
			default:
				return draftState;
		}
	});

export default breadcrumb;
