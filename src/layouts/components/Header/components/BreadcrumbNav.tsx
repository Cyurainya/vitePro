/*
 * @Author: yannis cyu
 * @Date: 2023-01-02 22:17:18
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:06:16
 * @Description: 请填写简介
 */
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { useGlobalStore } from "@/store/modules/global";
import { useBreadcrumbStore } from "@/store/modules/breadcrumb";

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	const { themeConfig } = useGlobalStore.getState();
	const { breadcrumbList } = useBreadcrumbStore.getState();
	const breadcrumbListNew = breadcrumbList[pathname] || [];

	return (
		<>
			{!themeConfig.breadcrumb && (
				<Breadcrumb>
					<Breadcrumb.Item href={`#${HOME_URL}`}>首页</Breadcrumb.Item>
					{breadcrumbListNew.map((item: string) => {
						return <Breadcrumb.Item key={item}>{item !== "首页" ? item : null}</Breadcrumb.Item>;
					})}
				</Breadcrumb>
			)}
		</>
	);
};

export default BreadcrumbNav;
