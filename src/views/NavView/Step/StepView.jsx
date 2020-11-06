import React,{ Component } from  'react'
import { Layout, Row, Col, Divider, Steps, message, Button } from 'antd'
import { 
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined
 } from '@ant-design/icons'

 import '@/style/views-style/step.scss'

const { Step } = Steps;

const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];


class StepView extends Component {

    state = {
        current:1
    }
    next = () => {
        this.setState((state) => {
            return { current: state.current + 1 }
        })
    }

    prev = () => {
        this.setState((state) => {
            return { current: state.current - 1 }
        })
    }

    onChange =(current) => {
        this.setState({
            current: current
        })
    }

    render() {
        let { current } = this.state
        return (
            <Layout>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className="base-style">
                            <Steps direction="vertical" current={1}>
                                <Step title="Finished" description="This is a description." />
                                <Step title="In Progress" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                            </Steps>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="base-style">
                            <Steps direction="vertical" size="small" current={1}>
                                <Step title="Finished" description="This is a description." />
                                <Step title="In Progress" description="This is a description." />
                                <Step title="Waiting" description="This is a description." />
                            </Steps>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="base-style">
                            <Steps>
                                <Step status="finish" title="Login" icon={<UserOutlined />} />
                                <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                                <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                                <Step status="wait" title="Done" icon={<SmileOutlined />} />
                            </Steps>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="base-style">
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => this.next()}>
                                    Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                    Previous
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="base-style">
                            <Steps current={current} onChange={this.onChange}>
                                <Step title="Step 1" description="This is a description." />
                                <Step title="Step 2" description="This is a description." />
                                <Step title="Step 3" description="This is a description." />
                            </Steps>

                            <Divider />

                            <Steps current={current} onChange={this.onChange} direction="vertical">
                                <Step title="Step 1" description="This is a description." />
                                <Step title="Step 2" description="This is a description." />
                                <Step title="Step 3" description="This is a description." />
                            </Steps>
                        </div>
                        
                    </Col>
                </Row>
            </Layout>
        )
    }
}



export default StepView