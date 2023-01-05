import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useMenuStore } from "@/store/modules/menu";

const CollapseIcon = () => {
	const { isCollapse, updateCollapse } = useMenuStore.getState();
	return (
		<div
			className="collapsed"
			onClick={() => {
				updateCollapse(!isCollapse);
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
		</div>
	);
};

export default CollapseIcon;
