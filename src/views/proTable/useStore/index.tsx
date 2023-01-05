/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 18:42:39
 * @Description: 请填写简介
 */

import { useBreadcrumbStore } from "@/store/modules/breadcrumb";

const StoreComponent = () => {
	const { breadcrumbList } = useBreadcrumbStore.getState();
	return <div>{JSON.stringify(breadcrumbList)}</div>;
};

export default StoreComponent;
