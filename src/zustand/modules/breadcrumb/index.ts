/*
 * @Author: yannis cyu
 * @Date: 2023-01-04 15:18:32
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 18:27:18
 * @Description: 请填写简介
 */
import create from "zustand";
import { BreadcrumbSliceState } from "@/store/interface";

export const useBreadcrumbStore = create<BreadcrumbSliceState>()(set => ({
	breadcrumbList: { list: "dd" },
	setBreadcrumbList: (by: BreadcrumbSliceState) => set({ breadcrumbList: by })
}));
