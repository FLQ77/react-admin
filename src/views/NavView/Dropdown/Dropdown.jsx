import React from 'react'

import { Layout, Divider, Row, Col, Dropdown, Menu, message, Button, Tooltip } from 'antd'
import { 
    DownOutlined,
    UserOutlined
} from '@ant-design/icons'

import '@/style/views-style/dropdown.scss'

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
)

function handleButtonClick(e) {
    message.info('Click on left button.')
    console.log('click left button', e)
}

const DropdownView = () => (
    <Layout>
        <div className='base-style'>
            <h3>何时使用</h3>
            <Divider />
            <p>
                当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
            </p>
        </div>
        <Row gutter={8}>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Hover me <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
                
                <div className='base-style'>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>bottomCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Button>bottomRight</Button>
                    </Dropdown>
                    <br />
                    <Dropdown overlay={menu} placement="topLeft" arrow>
                        <Button>topLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topCenter" arrow>
                        <Button>topCenter</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topRight" arrow>
                        <Button>topRight</Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button type='link'>
                            Click me <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Col>
            <Col span={8}>
                <div className='base-style'>
                    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                        Dropdown
                    </Dropdown.Button>
                    <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                        Dropdown
                    </Dropdown.Button>
                    <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
                        Dropdown
                    </Dropdown.Button>
                    <Dropdown.Button
                        overlay={menu}
                        buttonsRender={([leftButton, rightButton]) => [
                            <Tooltip title="tooltip" key="leftButton">
                            {leftButton}
                            </Tooltip>,
                            React.cloneElement(rightButton, { loading: true }),
                        ]}
                        >
                        With Tooltip
                    </Dropdown.Button>
                    <Dropdown overlay={menu}>
                        <Button>
                            Button <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
            </Col>
        </Row>
        
    </Layout>
)

export default DropdownView;