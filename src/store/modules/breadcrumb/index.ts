import { devtools, persist } from "zustand/middleware";
import create from "zustand";
import { BreadcrumbSliceState } from "@/store/interface";

export type BreadcrumbStoreProps = BreadcrumbSliceState & {
	setBreadcrumbList: (val: BreadcrumbSliceState) => void;
};

const breadcrumbListInit = {
	breadcrumbList: {}
};

export const useBreadcrumbStore = create<BreadcrumbStoreProps>()(
	devtools(
		persist(
			set => ({
				...breadcrumbListInit,
				setBreadcrumbList: (by: BreadcrumbSliceState) => set({ breadcrumbList: by })
			}),
			{
				name: "breadcrumbStorage"
			}
		)
	)
);
