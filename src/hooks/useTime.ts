/*
 * @Author: yannis cyu
 * @Date: 2023-01-02 22:17:18
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 13:35:11
 * @Description: 请填写简介
 */
import dayjs from "dayjs";
import { useEffect, useState, useRef } from "react";

/**
 * @description 获取本地时间
 */
export const useTimes = () => {
	const timer: any = useRef(null);
	const [time, setTime] = useState(dayjs().format("YYYY年MM月DD日 HH:mm:ss"));
	useEffect(() => {
		timer.current = setInterval(() => {
			setTime(dayjs().format("YYYY年MM月DD日 HH:mm:ss"));
		}, 1000);
		return () => {
			clearInterval(timer.current);
		};
	}, [time]);

	return {
		time
	};
};
