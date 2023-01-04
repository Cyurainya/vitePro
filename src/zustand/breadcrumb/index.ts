/*
 * @Author: yannis cyu
 * @Date: 2023-01-04 14:27:54
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 15:19:09
 * @Description: 请填写简介
 */
import create from "zustand";
import { BreadcrumbSliceState } from "@/store/interface";

const useBreadcrumbStore = create<BreadcrumbSliceState>()(set => ({
	breadcrumbList: {
		title: "00"
	},
	updateBreadcrumb: (by: any) => set(() => ({ breadcrumbList: by }))
}));

export default useBreadcrumbStore;
