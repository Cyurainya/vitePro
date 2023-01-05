/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 17:26:20
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:34:23
 * @Description: 请填写简介
 */
const menuRes = {
	code: 200,
	data: [
		{
			icon: "HomeOutlined",
			title: "首页",
			path: "/home/index"
		},
		{
			icon: "TableOutlined",
			title: "超级表格",
			path: "/proTable",
			children: [
				{
					icon: "AppstoreOutlined",
					path: "/proTable/useHooks",
					title: "使用 Hooks"
				},
				{
					icon: "AppstoreOutlined",
					path: "/proTable/useStore",
					title: "使用 zustand"
				}
			]
		},

		{
			icon: "ShoppingOutlined",
			title: "常用组件",
			path: "/assembly",
			children: [
				{
					icon: "AppstoreOutlined",
					path: "/assembly/guide",
					title: "引导页"
				},
				{
					icon: "AppstoreOutlined",
					path: "/assembly/svgIcon",
					title: "Svg 图标"
				},
				{
					icon: "AppstoreOutlined",
					path: "/assembly/selectIcon",
					title: "Icon 选择"
				}
			]
		},
		{
			icon: "ProfileOutlined",
			title: "菜单嵌套",
			path: "/menu",
			children: [
				{
					icon: "AppstoreOutlined",
					path: "/menu/menu1",
					title: "菜单1"
				},
				{
					icon: "AppstoreOutlined",
					path: "/menu/menu2",
					title: "菜单2",
					children: [
						{
							icon: "AppstoreOutlined",
							path: "/menu/menu2/menu21",
							title: "菜单2-1"
						},
						{
							icon: "AppstoreOutlined",
							path: "/menu/menu2/menu22",
							title: "菜单2-2",
							children: [
								{
									icon: "AppstoreOutlined",
									path: "/menu/menu2/menu22/menu221",
									title: "菜单2-2-1"
								},
								{
									icon: "AppstoreOutlined",
									path: "/menu/menu2/menu22/menu222",
									title: "菜单2-2-2"
								}
							]
						},
						{
							icon: "AppstoreOutlined",
							path: "/menu/menu2/menu23",
							title: "菜单2-3"
						}
					]
				},
				{
					icon: "AppstoreOutlined",
					path: "/menu/menu3",
					title: "菜单3"
				}
			]
		},
		{
			icon: "ExclamationCircleOutlined",
			title: "错误页面",
			path: "/error",
			children: [
				{
					icon: "AppstoreOutlined",
					path: "/404",
					title: "404页面"
				},
				{
					icon: "AppstoreOutlined",
					path: "/403",
					title: "403页面"
				},
				{
					icon: "AppstoreOutlined",
					path: "/500",
					title: "500页面"
				}
			]
		}
	],
	msg: "成功"
};

export const getMenuListMock = () => {
	// 由后端鉴权
	return menuRes;
};
