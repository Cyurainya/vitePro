import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HOME_URL } from "@/config/config";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const MoreButton = (props: any) => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	// close multipleTab
	const closeMultipleTab = (tabPath?: string) => {
		const handleTabsList = props.tabsList.filter((item: Menu.MenuOptions) => {
			return item.path === tabPath || item.path === HOME_URL;
		});
		props.setTabsList(handleTabsList);
		tabPath ?? navigate(HOME_URL);
	};

	const menu: MenuItem = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>{t("tabs.closeCurrent")}</span>,
					onClick: () => props.delTabs(pathname)
				},
				{
					key: "2",
					label: <span>{t("tabs.closeOther")}</span>,
					onClick: () => closeMultipleTab(pathname)
				},
				{
					key: "3",
					label: <span>{t("tabs.closeAll")}</span>,
					onClick: () => closeMultipleTab()
				}
			]}
		/>
	);
	return (
		<Dropdown menu={menu} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
			<Button className="more-button" type="primary" size="small">
				{t("tabs.more")} <DownOutlined />
			</Button>
		</Dropdown>
	);
};
export default MoreButton;
