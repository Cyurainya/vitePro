/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:07:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 16:53:18
 * @Description: 请填写简介
 */
import { Dropdown, Menu } from "antd";
import { setAssemblySize } from "@/store/modules/global/action";
import { connect } from "react-redux";

const AssemblySize = (props: any) => {
	const { assemblySize, setAssemblySize } = props;

	// 切换组件大小
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

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setAssemblySize };
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize);
