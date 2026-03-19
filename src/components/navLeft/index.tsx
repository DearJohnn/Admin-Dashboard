import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import icons from './iconList';
import logo from "../../assets/logo.png"
import "./index.scss"
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import MenuItem from 'antd/es/menu/MenuItem';


type AntdMenuItem = Required<MenuProps>['items'][number];

export interface MenuItem {
  key: string;
  label: string;
  icon?: keyof typeof icons;
  children?: MenuItem[];
}

function NavLeft(){
  const{menuList} = useSelector((state:any)=>state.authSlice)
  const [menuData,setMenuData] = useState<AntdMenuItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    configMenu();
  },[menuList])

  async function configMenu() {
    const mappedMenuItems:AntdMenuItem[] = mapMenuItems(menuList);
    setMenuData(mappedMenuItems);
  }

  function mapMenuItems(items:MenuItem[]):AntdMenuItem[]{
    return items.map((item)=>({
      key:item.key,
      label:item.label,
      icon: item.icon ? icons[item.icon] : undefined,
      children:item.children?mapMenuItems(item.children):undefined //recursion
    }))
  }

  function handleClick({key}:{key:string}){
    navigate(key);
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
        onClick={handleClick}
        selectedKeys={[location.pathname]}
      />
    </div>
}

export default NavLeft;