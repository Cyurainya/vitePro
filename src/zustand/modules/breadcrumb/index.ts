/*
 * @Author: yannis cyu
 * @Date: 2023-01-04 15:18:32
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 18:40:38
 * @Description: 请填写简介
 */
import create from "zustand";
import { BreadcrumbSliceState } from "@/store/interface";

type BreadcrumbProps = {
	setBreadcrumbList: (val: BreadcrumbSliceState) => void;
	breadcrumbList: BreadcrumbSliceState;
};

export const useBreadcrumbStore = create<BreadcrumbProps>()(set => ({
	breadcrumbList: {},
	setBreadcrumbList: (by: BreadcrumbSliceState) => set({ breadcrumbList: by })
}));
