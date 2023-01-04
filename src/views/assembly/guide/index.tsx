/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:07:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 14:48:36
 * @Description: 请填写简介
 */
import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import { Button, Alert } from "antd";
import steps from "./steps";

const Guide = () => {
	const driver = new Driver({
		animate: true, // 在更改突出显示的元素时是否设置动画，
		opacity: 0.75, // 背景不透明度（0表示只有弹出窗口，没有覆盖）
		doneBtnText: "结束", // 最后一个按钮上的文本
		closeBtnText: "关闭", // 此步骤的“关闭”按钮上的文本
		nextBtnText: "下一步", // 此步骤的下一步按钮文本
		prevBtnText: "上一步" // 此步骤的上一个按钮文本
	});

	const guide = () => {
		driver.defineSteps(steps);
		driver.start();
		console.log(driver, "driver");
	};
	return (
		<div className="card contentBox">
			<Alert message="driver.js引导" style={{ width: "100%" }} type="warning" />
			<div style={{ margin: "15px auto" }}>
				<Button type="primary" id="antd-button" onClick={guide}>
					打开引导页 🤹‍♂️
				</Button>
			</div>
		</div>
	);
};

export default Guide;
