/*
 * @Author: yannis cyu
 * @Date: 2023-01-02 22:17:18
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 10:15:34
 * @Description: 请填写简介
 */
import { connect } from "react-redux";
import styles from "./index.module.less";

const LayoutFooter = (props: any) => {
	const { themeConfig } = props;
	return <>{!themeConfig.footer && <div className={styles.footer} />}</>;
};

const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(LayoutFooter);
