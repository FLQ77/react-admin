import React from 'react'
import { Layout, Avatar, Badge, Dropdown, Menu } from 'antd'
import { 
    GithubOutlined, 
    BellOutlined,
    EditOutlined,
    SettingOutlined,
    LogoutOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, avatar, menuToggle, loginOut } = props
    const menu = (
        <Menu>
            <Menu.ItemGroup title='用户设置'>
                <Menu.Divider/>
                <Menu.Item>
                    <EditOutlined />
                    个人设置
                </Menu.Item>
                <Menu.Item>
                    <SettingOutlined />
                    系统设置
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.Divider/>
            <Menu.Item>
                <span>
                <LogoutOutlined />
                    退出登录
                </span>
            </Menu.Item>
        </Menu>
    )
    return (
        <Header className='header'>
            <div className='left'>
                { menuToggle ? (<MenuUnfoldOutlined style={{ fontSize: '2rem',cursor: 'pointer' }} onClick={menuClick} />) : 
                    (<MenuFoldOutlined style={{ fontSize: '2rem',cursor: 'pointer' }}  onClick={menuClick} />) }    
            </div>
            <div className='right'>
                <div className='mr15'>
                    <a rel='noopener noreferrer' href='https://github.com/FLQ77/react-admin' target='_blank'>
                        <GithubOutlined style={{ color: '#000' }} />
                    </a>
                </div>
                <div className='mr15'>
                    <Badge dot={true}>
                        <a rel='noopener noreferrer' href='https://github.com/FLQ77/react-admin' style={{ color: '#000'}}>
                            <BellOutlined />
                        </a>
                    </Badge>
                </div>
                <div>
                    <Dropdown overlay={menu}>
                        <div className='ant-dropdowm-link'>
                            <Avatar icon={<UserOutlined />} src={avatar} alt='avatar' style={{ cursor: 'pointer' }} />
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    )
}

export default AppHeader