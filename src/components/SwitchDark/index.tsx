/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:07:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:11:40
 * @Description: 请填写简介
 */
import { useGlobalStore } from "@/store/modules/global";
import { Switch } from "antd";

const SwitchDark = () => {
	const { setThemeConfig, themeConfig } = useGlobalStore.getState();
	const onChange = (checked: boolean) => {
		setThemeConfig({ ...themeConfig, isDark: checked });
	};

	return (
		<Switch
			className="dark"
			defaultChecked={themeConfig.isDark}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

export default SwitchDark;
