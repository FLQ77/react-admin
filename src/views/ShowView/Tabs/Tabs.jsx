import React from 'react'
import { Layout, Row, Col, Divider,Tabs, Checkbox, Button } from 'antd'
import '@/style/views-style/tabs.scss'
const { TabPane } = Tabs


function callback(key) {
    console.log(key)
}

const CheckboxGroup = Checkbox.Group;

const operations = <Button>Extra Action</Button>;

const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

const options = ['left', 'right'];

const TabsView  = () => {
    const [position, setPosition] = React.useState(['left', 'right']);

    const slot = React.useMemo(() => {
        if (position.length === 0) return null;
    
        return position.reduce(
          (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
          {},
        );
    }, [position]);

    return (
        <Layout>
            <div className='base-style'>
                <h3>何时使用</h3>
                <Divider />
                <p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁</p>
                <p>Ant Design 依次提供了三级选项卡，分别用于不同的场景</p>
                <p>- 卡片式的页签，提供可关闭的样式，常用于容器顶部。</p>
                <p>- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</p>
                <p>- RadioButton 可作为更次级的页签来使用。</p>
            </div>
            <Row gutter={8}>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>基本用法</Divider>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='base-style'>
                        <Divider orientation='left'>附加内容</Divider>
                        <CheckboxGroup
                            options={options}
                            value={position}
                            onChange={value => {
                            setPosition(value);
                            }}
                        />
                        <br />
                        <br />
                        <Tabs tabBarExtraContent={slot}>
                            <TabPane tab="Tab 1" key="1">
                            Content of tab 1
                            </TabPane>
                            <TabPane tab="Tab 2" key="2">
                            Content of tab 2
                            </TabPane>
                            <TabPane tab="Tab 3" key="3">
                            Content of tab 3
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}   



export default TabsView