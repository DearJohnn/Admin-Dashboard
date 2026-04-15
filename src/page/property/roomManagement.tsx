import { Card, Row, Col, Image ,Radio, type RadioChangeEvent, Spin} from "antd"
import { getRoomList } from "../../api/room";
import "./index.scss"
import { useEffect, useState } from "react";
import { getBuildingList } from "../../api/buildingList";
import type { BuildingType } from "./interface";

interface RoomType {
    roomNumber: number;
    decorationType: "Shell" | "Fully Fitted";
    area: number;
    unitPrice: number;
    src:string;
}

function RoomManangement() {
    const [visible, setVisible] = useState<boolean>(false);
    const [roomList, setRoomList] = useState<RoomType[]>([]);
    const [buildingList,setBuildingList] = useState<BuildingType[]>([]);
    const [src,setSrc] = useState<string>("");
    const [selectedBuilding,setSelectedBuilding] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);
    const loadRoom = async (roomid: string) => {
        setLoading(true);
        const { data: { data: {rooms} } } = await getRoomList(roomid);
        setLoading(false);
        setRoomList(rooms);
        
    }

    const loadBuilding = async()=>{
        const { data: { data: { list } } } = await getBuildingList({page:0,pageSize:0});
        setBuildingList(list);

        if(list.length>0){
            setSelectedBuilding(list[0].key)
            loadRoom(list[0].key)
        }
    }

    useEffect(() => {
        loadBuilding();
    }, [])

    const showImage=(src:string)=>{
        setSrc(src);
        setVisible(true);
    }

    const handleChange=(e:RadioChangeEvent)=>{
        const roomid = e.target.value;
        setSelectedBuilding(roomid);
        loadRoom(roomid)
    }

    return <div className="room">
        <Image
            width={200}
            style={{ display: 'none' }}
            preview={{
                visible,
                src,
                onVisibleChange: (value) => {
                    setVisible(value);
                }
            }}
        />
        <Card className="mb">
            <Radio.Group value={selectedBuilding} optionType="button" buttonStyle="solid" onChange={handleChange}>
                {
                    buildingList.map((item)=>(
                        <Radio.Button value={item.key}>{item.buildingName}</Radio.Button>
                    ))
                }
            </Radio.Group>
        </Card>
        <Spin spinning={loading}>
            <Row gutter={16}>
                {
                    roomList.map((item) => (
                            <Col span={6} className="room-card">
                                <Card title="Room ID" extra={<a onClick={() => { showImage(item.src) }}>Floor Plan</a>}>
                                    <h1>{item.roomNumber}</h1>
                                    <div className="room-info">
                                        <p>Condition</p>
                                        <p>{item.decorationType}</p>
                                    </div>
                                    <div className="room-info">
                                        <p>Area (sq ft):</p>
                                        <p>{item.area}</p>
                                    </div>
                                    <div className="room-info">
                                        <p>Rental Rate (USD/sq ft):</p>
                                        <p>{item.unitPrice}</p>
                                    </div>
                                </Card>
                            </Col>
                    ))
                }
            </Row>
        </Spin>
    </div>
}

export default RoomManangement