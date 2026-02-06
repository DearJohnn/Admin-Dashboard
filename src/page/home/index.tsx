import { Button } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import React from "react";

function Home(){
    return <div>
            Home
            <Button type="primary" shape="circle" icon={<SearchOutlined/>}></Button>
            <Abutton>Button</Abutton>
        </div>
}

interface buttonProps{
    type?:string;
    children:React.ReactNode;
}

const Abutton:React.FC<buttonProps>=(props)=>{
    const cssStyle={padding:"10px 20px",borderRadius:"10px", backgroundColor:props.type=="primary"?"blue":"red"}
    return <button style={cssStyle}>{props.children}</button>
}
export default Home