import React, { Component } from 'react'
import { Layout,Divider, Row, Col,Progress, Button, Tooltip } from 'antd'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

class ProgressView extends Component {

    state = {
        percent:0
    }

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }

    render() {
        return (
            <Layout className='animate__animated animate__fadeIn'>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className="base-style">
                            <Divider orientation='left'>标准进度条</Divider>
                            <Progress percent={30} />
                            <Progress percent={50} status="active" />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                            <Progress percent={50} showInfo={false} />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="base-style">
                            <Divider orientation='left'>进度圈</Divider>
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="base-style">
                            <Divider orientation='left'>动态进度条</Divider>
                            <Progress type="circle" percent={this.state.percent} />
                            <Progress percent={this.state.percent} />
                                <Button.Group>
                                <Button onClick={this.decline} icon={<MinusOutlined />} />
                                <Button onClick={this.increase} icon={<PlusOutlined />} />
                            </Button.Group>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="base-style">
                            <Divider orientation='left'>分段进度条</Divider>
                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                <Progress percent={60} success={{ percent: 30 }} />
                            </Tooltip>

                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                <Progress percent={60} success={{ percent: 30 }} type="circle" />
                            </Tooltip>

                            <Tooltip title="3 done / 3 in progress / 4 to do">
                                <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
                            </Tooltip>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="base-style">
                            <Divider orientation='left'>自定义渐变进度条</Divider>
                            <Progress
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={99.9}
                                />
                            <Progress
                                strokeColor={{
                                    from: '#108ee9',
                                    to: '#87d068',
                                }}
                                percent={99.9}
                                status="active"
                                />
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={90}
                                />
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={100}
                            />
                        </div>
                    </Col>
                </Row>  
            </Layout>
        )
    }
}


export default ProgressView