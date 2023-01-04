/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 18:31:09
 * @Description: 请填写简介
 */

import { useBreadcrumbStore } from "@/zustand/modules/breadcrumb";

const StoreComponent = () => {
	const breadcrumbList = useBreadcrumbStore(state => state.breadcrumbList);
	return <div>{JSON.stringify(breadcrumbList)}</div>;
};

export default StoreComponent;
