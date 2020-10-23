import React, {Component} from 'react' 
import { Layout,Row, Col, Divider } from 'antd'
import * as Icon from '@ant-design/icons'
import { FullscreenOutlined }  from '@ant-design/icons'
import screenfull from 'screenfull'

import '@/style/views-style/index.scss'

import BarEcharts from './Bar'
import LineEcharts from './Line'
import PieEcharts from './Pie'
import ScatterEchart from './Scatter'
import PictorialBarEchart from './PictorialBar'

class Index extends Component {
    fullToggle = () => {
        if(screenfull.isEnabled) {
            screenfull.request(document.getElementById('bar'))
        }
    }

    state= {
        appList:[
            { app:'微信', num: 999, icon:'WechatOutlined',style:'wechat' },
            { app:'QQ', num: 366, icon:'QqOutlined', style:'qq'},
            { app:'钉钉', num: 666, icon:'DingdingOutlined', style:'dingding'},
            { app:'微博', num: 369, icon:'WeiboOutlined', style:'weibo'}
        ]
    }

    renderCol = ({app,num,icon,style}) => (
            <Col span={6} key={app}>
                <div className={`base-style ${style}`}>
                    {React.createElement(Icon[icon],{className:'icon-style'})}
                    <div>
                        <span>{num}</span>
                        <div>{app}</div> 
                    </div>
                </div>
            </Col>
        )
    

    render() {
        return (
            <Layout className='index'>
                <Row gutter={24} className='index-header'>
                    { this.state.appList.map(item => {
                        return this.renderCol(item)
                    }) }
                </Row>
                <Row>
                    <Col span={24}>
                        <div className='base-style'>
                            <div className='bar-header'>
                                <div>图形全屏展示</div>
                                <FullscreenOutlined style={{ cursor: 'pointer'}} onClick={this.fullToggle} /> 
                            </div>
                            <Divider />
                            <BarEcharts />
                        </div>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <LineEcharts />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <PieEcharts />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <ScatterEchart />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <PictorialBarEchart />
                        </div>
                    </Col>
                </Row>
                
            </Layout>
            
        )
    }
}


export default Index