import React from 'react'
import { Collapse,Layout, Row, Col, Divider } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'

const { Panel } = Collapse;



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

function callback(key) {
    console.log(key)
}

const CollapseView = () => (
    <Layout>
        <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>对复杂区域进行分组和隐藏，保持页面的整洁。</p>
            <p>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。</p>
        </div>

        <Row>
            <Col span={24}>
                <div className='base-style'>
                    <Divider orientation='left'>简单使用</Divider>
                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                        <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" disabled>
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>  
            </Col>
            <Col span={24}>
                <div className='base-style'>
                    <Divider orientation='left'>手风琴</Divider>
                    <Collapse accordion>
                        <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>  
            </Col>
            <Col span={24}>
                <div className='base-style'>
                    <Divider orientation='left'>面板嵌套</Divider>
                    <Collapse onChange={callback}>
                        <Panel header="This is panel header 1" key="1">
                            <Collapse defaultActiveKey="1">
                                <Panel header="This is panel nest panel" key="1">
                                <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>  
            </Col>
            <Col span={24}>
                <div className='base-style'>
                    <Divider orientation='left'>自定义面板</Divider>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse"
                    >
                        <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>  
            </Col>
        </Row>
    </Layout>
)


export default CollapseView