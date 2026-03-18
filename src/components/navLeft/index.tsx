import { Menu } from 'antd';
import { getMenu } from '../../api/users';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import icons from './iconList';
import logo from "../../assets/logo.png"
import "./index.scss"


type AntdMenuItem = Required<MenuProps>['items'][number];

interface MenuItem {
  key: string;
  label: string;
  icon?: keyof typeof icons;
  children?: MenuItem[];
}


// const items: MenuItem[] = [
//   { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
//   { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
//   { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
//   {
//     key: 'sub1',
//     label: 'Navigation One',
//     icon: <MailOutlined />,
//     children: [
//       { key: '5', label: 'Option 5' },
//       { key: '6', label: 'Option 6' },
//       { key: '7', label: 'Option 7' },
//       { key: '8', label: 'Option 8' },
//     ],
//   },
//   {
//     key: 'sub2',
//     label: 'Navigation Two',
//     icon: <AppstoreOutlined />,
//     children: [
//       { key: '9', label: 'Option 9' },
//       { key: '10', label: 'Option 10' },
//       {
//         key: 'sub3',
//         label: 'Submenu',
//         children: [
//           { key: '11', label: 'Option 11' },
//           { key: '12', label: 'Option 12' },
//         ],
//       },
//     ],
//   },
// ];

function NavLeft(){
  const [menuData,setMenuData] = useState<AntdMenuItem[]>([]);

  useEffect(()=>{
    configMenu()
  },[])

  async function configMenu() {
    const {data:{data}}=await getMenu();
    console.log(data);
    const mappedMenuItems:AntdMenuItem[] = mapMenuItems(data)
    setMenuData(mappedMenuItems)
  }

  function mapMenuItems(items:MenuItem[]):AntdMenuItem[]{
    return items.map((item)=>({
      key:item.key,
      label:item.label,
      icon: item.icon ? icons[item.icon] : undefined,
      children:item.children?mapMenuItems(item.children):undefined //recursion
    }))
  }

    return <div className='navleft'>
      <div className='logo'>
          <img src={logo} width={18}/>
          <h1>NexSpace</h1>
      </div>
        <Menu
        defaultSelectedKeys={['/dashboard']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={menuData}
      />
    </div>
}

export default NavLeft;