import { Row, Col, Card, Tag, Progress, List, Avatar, Calendar, Badge, Spin } from 'antd'
import { getTaskList } from '../../api/profile'
import { useEffect, useState } from 'react';

const listData = [
  {
    title: '',
  },
];

interface TaskType {
  id: number;
  role: string;
  description: string;
  creator: string;
  date: string;
  type: string;
  progress: number;
}

function Profile() {
  const [dataList, setDataList] = useState<TaskType[]>([]);

  const loadData = async () => {
    const {
      data: {
        data: { list },
      },
    } = await getTaskList();
    setDataList(list);
  };

  useEffect(() => {
    loadData();
  }, []);

  const createTasks = (type: string, data: TaskType[]) => {
    const taskList = data.filter((item) => item.type === type);

    return taskList.map((item) => (
      <Card
        key={item.id}
        title={`New ${item.role} Account Request`}
        extra={<a href="#">Details</a>}
        className="mt"
      >
        <p>Description: {item.description}</p>
        <p className="mt">Creator: {item.creator}</p>
        <div className="mt">
          Date: <Tag>{item.date}</Tag>
        </div>
        <div className="mt">
          Progress:
          <Progress percent={item.progress} />
        </div>
      </Card>
    ));
  };

  const pendingCount = dataList.filter((item) => item.type === 'Pending').length;
  const processingCount = dataList.filter((item) => item.type === 'Processing').length;
  const completedCount = dataList.filter((item) => item.type === 'Completed').length;

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <List
              itemLayout="horizontal"
              dataSource={listData}
              renderItem={() => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://randomuser.me/api/portraits/thumb/men/52.jpg" />
                    }
                    title={
                      <a>{sessionStorage.getItem('username') + ' - Administrator'}</a>
                    }
                    description="Keeping systems running, users supported, and chaos under control."
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card className="mt">
            <Calendar />
          </Card>
        </Col>
        <Col span={16}>
          <Row gutter={16}>
            <Col span={8}>
              <Card className="mb">
                Pending: <Badge count={pendingCount} color="#faad14" />
              </Card>
              {createTasks('Pending', dataList)}
            </Col>

            <Col span={8}>
              <Card className="mb">
                Processing: <Badge count={processingCount} color="#1677ff" />
              </Card>
              {createTasks('Processing', dataList)}
            </Col>

            <Col span={8}>
              <Card className="mb">
                Completed: <Badge count={completedCount} color="#52c41a" />
              </Card>
              {createTasks('Completed', dataList)}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;