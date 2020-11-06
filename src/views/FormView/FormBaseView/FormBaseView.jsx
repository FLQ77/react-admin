import React,{ Component } from  'react'
import {
    Layout,
    Divider,
    Row,
    Col,
    Alert,
    Form,
    Tooltip,
    Input,
    Radio,
    Checkbox,
    InputNumber,
    DatePicker,
    Button,
    Cascader,
    AutoComplete
} from 'antd'

import { 
    QuestionCircleOutlined
 } from '@ant-design/icons'

import '@/style/views-style/form.scss'

const residences = [
    {
        value: 'sichuan',
        label: '四川',
        children: [
            {
                value: 'chengdu',
                label: '成都',
                children: [
                    {
                        value: 'gaoxin',
                        label: '高新区'
                    }
                ]
            }
        ]
    },
    {
        value: 'gansu',
        label: '甘肃',
        children: [
            {
                value: 'lanzhou',
                label: '兰州',
                children: [
                    {
                        value: 'anning',
                        label: '安宁区'
                    }
                ]
            }
        ]
    }
]

class FormBaseView extends Component {

    state = {
        visible: true,
        autoCompleteResult: []
    }

    handleClose = () => {
        this.setState({
            visible: false
        })
    }

    onWebsiteChange = (value) => {
        let autoCompleteResult
        if(!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = ['@google.com','@163.com','@qq.com'].map(domain => `${value}${domain}` )
        }
        this.setState({ autoCompleteResult })
    }

    render() {
        let websiteOptions = this.state.autoCompleteResult.map((item)=>{
            return null;
        })
        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 16 },
                sm: { span: 10 }
            }
        }
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 16,
                    offset: 0
                },
                sm: {
                    span: 10,
                    offset: 6
                }
            }
        }

        return (
            <Layout>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider></Divider>
                    <p>用于创建一个实体或收集信息。</p>
                    <p>需要对输入的数据类型进行校验时。</p>
                </div>
                <Row gutter={8}>
                    <Col span={24}>
                        <div className='base-style'>
                            <div>
                                {this.state.visible ? (
                                    <Alert
                                        message='你最好认真的填写表单!'
                                        type='warning'
                                        closable
                                        banner
                                        afterClose={this.handleClose}
                                    />
                                ) : null}
                            </div>
                            <Divider orientation='left'>基础功能</Divider>
                            <Form labelAlign="right" {...formItemLayout}>
                                <Form.Item
                                    label={
                                        <span>
                                            用户名&nbsp;
                                            <Tooltip title='可以尽量好听点，真的!'>
                                                <QuestionCircleOutlined />
                                            </Tooltip>
                                        </span>
                                    }
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Please input your username!" />
                                </Form.Item>
                                <Form.Item label='性别'
                                    name="sex"
                                    rules = {[
                                        { required: true, message: '请选择性别' }
                                    ]}
                                >
                                    <Radio.Group>
                                        <Radio value='man'>男</Radio>
                                        <Radio value='women'>女</Radio>
                                        <Radio value='unknow'>不详</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label='爱好' 
                                    rules={
                                        [{ required: true, message: '请至少选择一个爱好' }]
                                    }
                                    initialValue = { ["A","B"] }
                                    >
                                    <Checkbox.Group style={{ width: '100%' }}>
                                        <Row>
                                            <Col span={8}>
                                                <Checkbox value='A'>A</Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox disabled value='B'>
                                                    B
                                                </Checkbox>
                                            </Col>
                                            <Col span={8}>
                                                <Checkbox value='C'>C</Checkbox>
                                            </Col>
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item>
                                <Form.Item label='年龄'
                                    name="age"
                                    rules={
                                        [{ required: true, message: '请输入年龄' }]
                                    }>
                                    <InputNumber placeholder='请输入年龄' style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item label='出生年月'
                                    name="birthday"
                                    rules={
                                        [{ type: 'object', required: true, message: '请选择日期' }]
                                    }>
                                    <DatePicker style={{ width: '100%' }} placeholder='请选择日期' />
                                </Form.Item>
                                
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                    ]}
                                >   
                                    <AutoComplete children ={websiteOptions} onChange={this.onWebsiteChange} placeholder="website">
                                    <Input />
                                    </AutoComplete>
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        }
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="nickname"
                                    label={
                                    <span>
                                        Nickname&nbsp;
                                        <Tooltip title="What do you want others to call you?">
                                        <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                    }
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your nickname!',
                                        whitespace: true,
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="residence"
                                    label="Habitual Residence"
                                    rules={[
                                    {
                                        type: 'array',
                                        required: true,
                                        message: 'Please select your habitual residence!',
                                    },
                                    ]}
                                >
                                    <Cascader options={residences} />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                    ]}
                                >
                                    <Input
                                    // addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                    />
                                </Form.Item>

                                {/* <Form.Item
                                    name="website"
                                    label="Website"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input website!',
                                    },
                                    ]}
                                >
                                    <AutoComplete options={websiteOptions} onChange={this.onWebsiteChange} placeholder="website">
                                    <Input />
                                    </AutoComplete>
                                </Form.Item> */}

                                <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            <Form.Item
                                            name="captcha"
                                            noStyle
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please input the captcha you got!',
                                                },
                                            ]}
                                            >
                                            <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Button>Get captcha</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                    {
                                        validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                    },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                    I have read the <a href="">agreement</a>
                                    </Checkbox>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    
                </Row>
            </Layout>
        )
    }
}


export default FormBaseView