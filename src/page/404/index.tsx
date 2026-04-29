import {Button, Empty, Typography} from 'antd'
import { Link } from 'react-router-dom';

function NotFound(){
    return <Empty
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        style={{marginTop:"200px"}}
        description={
            <Typography.Text>
                <a>Page Not Found</a>
            </Typography.Text>
        }
    >
        <Button type='primary'><Link to='/dashboard'>Back to Home</Link></Button>
    </Empty>
}

export default NotFound;