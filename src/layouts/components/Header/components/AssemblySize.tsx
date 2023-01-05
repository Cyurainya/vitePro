/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:07:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:06:28
 * @Description: 请填写简介
 */
import { Dropdown, Menu } from "antd";
import { useGlobalStore } from "@/store/modules/global";

const AssemblySize = () => {
	const { assemblySize, setAssemblySize } = useGlobalStore.getState();

	// 切换组件大小
	// TODO need to fix
	const onClick = (e: MenuInfo) => {
		setAssemblySize(e.key);
	};

	const menu = (
		<Menu
			items={[
				{
					key: "middle",
					disabled: assemblySize == "middle",
					label: <span>默认</span>,
					onClick
				},
				{
					disabled: assemblySize == "large",
					key: "large",
					label: <span>大型</span>,
					onClick
				},
				{
					disabled: assemblySize == "small",
					key: "small",
					label: <span>小型</span>,
					onClick
				}
			]}
		/>
	);
	return (
		<Dropdown menu={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-contentright"></i>
		</Dropdown>
	);
};

export default AssemblySize;
