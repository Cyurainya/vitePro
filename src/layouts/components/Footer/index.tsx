/*
 * @Author: yannis cyu
 * @Date: 2023-01-02 22:17:18
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:10:20
 * @Description: 请填写简介
 */
import { useGlobalStore } from "@/store/modules/global";
import styles from "./index.module.less";

const LayoutFooter = () => {
	const { themeConfig } = useGlobalStore.getState();
	return <>{!themeConfig.footer && <div className={styles.footer} />}</>;
};

export default LayoutFooter;
