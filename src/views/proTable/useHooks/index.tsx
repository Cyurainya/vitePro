/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 15:28:09
 * @Description: 请填写简介
 */
import { useEffect } from "react";
import { Table, DatePicker, Button, Space } from "antd";
import useAuthButtons from "@/hooks/useAuthButtons";

import styles from "./index.module.less";

const UseHooks = () => {
	// 按钮权限
	const { BUTTONS } = useAuthButtons();
	const { RangePicker } = DatePicker;

	useEffect(() => {
		console.log(BUTTONS);
	}, []);

	const dataSource = [
		{
			key: "1",
			name: "dog",
			age: 32,
			address: "address"
		},
		{
			key: "2",
			name: "dog",
			age: 42,
			address: "address"
		},
		{
			key: "3",
			name: "刘彦祖",
			age: 18,
			address: "address"
		},
		{
			key: "4",
			name: "dog",
			age: 18,
			address: "address"
		},
		{
			key: "5",
			name: "dog",
			age: 18,
			address: "address"
		}
	];

	const columns: any[] = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			align: "center"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age",
			align: "center"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address",
			align: "center",
			width: "50%"
		}
	];
	return (
		<div className={`${styles.card} ${styles.contentBox}`}>
			<div className="date">
				<span>切换国际化的时候看我 😎 ：</span>
				<RangePicker />
			</div>
			<div className="auth">
				<Space>
					{BUTTONS.add && <Button type="primary">我是 Admin && User 能看到的按钮</Button>}
					{BUTTONS.delete && <Button type="primary">我是 Admin 能看到的按钮</Button>}
					{BUTTONS.edit && <Button type="primary">我是 User 能看到的按钮</Button>}
				</Space>
			</div>
			<Table bordered={true} dataSource={dataSource} columns={columns} />
		</div>
	);
};

export default UseHooks;
