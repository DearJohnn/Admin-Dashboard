import { Row, Col, Card, Progress, Statistic, Timeline, Tag} from "antd"
import { RadarChartOutlined, SnippetsOutlined, DollarOutlined, LaptopOutlined } from "@ant-design/icons"
import "./index.scss"
import ReactECharts from "echarts-for-react"
import { getEnergyData, getParkingData } from "../../api/dashboard"
import { useEffect, useState } from "react"


const option2 = {
    title: {
        text: 'Industry Category',
        left: '0'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top:'95%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: [0, 0.01],
        data: ['2016', '2018', '2020', '2022', '2024', "2026"]
    },
    yAxis: {
        type: 'value',

    },
    series: [
        {
            name: 'Technology',
            type: 'bar',
            data: [40, 220, 378, 658, 1122, 1200]
        },
        {
            name: 'Finance',
            type: 'bar',
            data: [20, 39, 443, 490, 559, 762]
        },
        {
            name: 'Healthcare',
            type: 'bar',
            data: [78, 167, 229, 330, 380, 420]
        }
    ]
};

const option3 = {
    legend: {
        top: '95%',
    },
    tooltip:{
        trigger:"item"
    },
    series: [
        {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 4
            },
            data: [
                { value: 40, name: 'Active' },
                { value: 38, name: 'Leased' },
                { value: 32, name: 'Leased Out' },
                { value: 30, name: 'Renewal' },
                { value: 28, name: 'New Lease' },
                { value: 26, name: 'Vacant' },
                { value: 22, name: 'Move-Out' },
            ].sort(function(a,b){
                return a.value - b.value
            }),
            top:"0%",
            bottom:"10%"
        }
    ]
};


function Dashboard() {

    const initalOption = {
        title: {
            text: 'Energy Usage (Today)',
            left: "0"
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [],
            width: "100%",
            top: "95%"
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '04:00', '08:00', '00:00']
        },
        yAxis: {
            type: 'value'
        },
        series: []
    };
    const [data,setEnergyData] = useState(initalOption)
    const [pData,setParkingData] = useState([]);

    useEffect(() => {
        const loadEnergyData = async () => {
            const { data:{data:energyData} } = await getEnergyData();
            const dataList = energyData.map((item:any)=>({
                name:item.name,
                data:item.data,
                type:"line",
                stack:"Total"
            }));
            const option:any={
                ...data,
                legend:{
                    data:dataList.map((item:any)=>item.name),
                },
                series:dataList
            }
            setEnergyData(option)
        }
        const loadParkingData = async ()=>{
            const {data:{data:parkingData}} = await getParkingData();
            const parkingDataList = parkingData.map((item:any)=>{
                if(item.tag=="Enter"){
                    return({
                        content:<><Tag color="green" className="parkingItemTag">{item.tag}</Tag>{item.content}</>,
                        color:""
                    })
                }else{
                    return({
                        content:<><Tag color="red" className="parkingItemTag">{item.tag}</Tag>{item.content}</>,
                        coloe:"red"
                    })
                }
            })
            setParkingData(parkingDataList);
        }
        loadEnergyData();
        loadParkingData();
    }, [])

    return <div className="dashboard">
        <Row gutter={16}>
            <Col span={6}>
                <Card>
                    <div className="cardData">
                        <div className="cl dataNumber">
                            <Statistic title="Total Area (sq ft)" value={28650} style={{fontWeight:"600"}}/>
                        </div>
                        <div className="cr">
                            <RadarChartOutlined className="icon" />
                        </div>
                    </div>

                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="cardData">
                        <div className="cl dataNumber">
                            <Statistic title="Leasable Area (sq ft)" value={14758} style={{fontWeight:"600"}}/>
                        </div>
                        <div className="cr">
                            <SnippetsOutlined className="icon" />
                        </div>
                    </div>

                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="cardData">
                        <div className="cl dataNumber">
                            <Statistic title="Total Output (USD)" value={56875.25} precision={2} style={{fontWeight:"600"}}/>
                        </div>
                        <div className="cr">
                            <DollarOutlined className="icon" />
                        </div>
                    </div>

                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div className="cardData">
                        <div className="cl dataNumber">
                            <Statistic title="Number of Tenants" value={2459} style={{fontWeight:"600"}}/>
                        </div>
                        <div className="cr">
                            <LaptopOutlined className="icon" />
                        </div>
                    </div>

                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="Energy Consumption">
                    <ReactECharts option={data} style={{ height: "400px" }}></ReactECharts>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Energy Consumption">
                    <ReactECharts option={option2} style={{ height: "400px" }}></ReactECharts>
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className="mt">
            <Col span={12}>
                <Card title="Leasing Status">
                    <ReactECharts option={option3} style={{ height: "400px" }}></ReactECharts>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="EV Charging Utilization">
                    <div className="progressData">
                        <Progress type="circle" size={200} percent={75}/>
                        <Statistic title="Total Charging Stations" value={75} suffix="/ 100" className="mt" style={{fontWeight:"600", textAlign:"center"}}/>
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Live Vehicle Data">
                    <div className="parkingData">
                        <Timeline items={pData}/>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default Dashboard