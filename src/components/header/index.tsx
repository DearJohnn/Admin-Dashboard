import { DownOutlined, UserOutlined, PoweroffOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { clearToken } from '../../store/login/authSlice';
import { useDispatch} from 'react-redux';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank">
        Profile
      </a>
    ),
    icon: <UserOutlined />
  },
  {
    key: '2',
    label: (
      <a target="_blank">
        Sign Out
      </a>
    ),
    icon: <PoweroffOutlined />
  }
];

function MyHeader(){
    const dispatch= useDispatch()
    const onClick:MenuProps['onClick']=({key})=>{
      if(key=="1"){
        //to account
      }else{
        dispatch(clearToken());
        sessionStorage.removeItem("username")
      }
    }
    return <div>
        <Dropdown menu={{ items,onClick }}>
            <a onClick={(e) => e.preventDefault()}>
            <Space>
                Welcome!{sessionStorage.getItem("username")}
                <DownOutlined />
            </Space>
            </a>
        </Dropdown>
    </div>
}

export default MyHeader;