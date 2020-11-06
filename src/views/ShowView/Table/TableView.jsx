import React, { Component } from 'react'

import { Layout, Row, Col, Divider, Table, Tag, Space, Radio, Button } from 'antd'

const { Column, ColumnGroup } = Table

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
    {
      key: '1',
      name: 'John Brown',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      firstName: 'Joe',
      lastName: 'Black',
      age: 35,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Jim Red',
        firstName:'Jim',
        lastName: 'Red',
        age: 25,
        tags: ['nice', 'developer'],
        address: 'London No. 2 Lake Park',
    },
  ]


const Table1 = () => (<Table columns={columns} dataSource={data} />)

const Table2 = () => (
    <Table dataSource={data}>
        <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
                <>
                {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                    {tag}
                    </Tag>
                ))}
                </>
            )}
        />
        <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
                </Space>
            )}
        />
    </Table>
)


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

class Table3 extends Component {
    state = {
        selectionType:'checkbox' 
    }

    setSelectionType = (value) => {
        this.setState({selectionType:value})
    } 

    render() {
        let { selectionType } = this.state
        return (
            <div>
                <Radio.Group 
                    onChange={ ({ target: {value} }) => {
                        this.setSelectionType(value)
                    }}
                    value={selectionType}
                >
                    <Radio value="checkbox">Checkbox</Radio>
                    <Radio value="radio">radio</Radio>
                </Radio.Group>

                <Divider />

                <Table 
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

class Table4 extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
    }
    
    clearFilters = () => {
        this.setState({ filteredInfo: null });
    }
    
    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        })
    }

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            }
        });
    }

    render() {
        let { sortedInfo, filteredInfo } = this.state
        sortedInfo = sortedInfo || {}
        filteredInfo = filteredInfo || {}

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [
                  { text: 'Joe', value: 'Joe' },
                  { text: 'Jim', value: 'Jim' },
                ],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                filters: [
                  { text: 'London', value: 'London' },
                  { text: 'New York', value: 'New York' },
                ],
                filteredValue: filteredInfo.address || null,
                onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
            }
        ]
        return (
            <>
                <Space style={{ marginBottom: 16 }}>
                    <Button onClick={this.setAgeSort}>Sort age</Button>
                    <Button onClick={this.clearFilters}>Clear filters</Button>
                    <Button onClick={this.clearAll}>Clear filters and sorters</Button>
                </Space>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </>
        )
    }
}

class TableView extends Component {

    render() {
        return (
            <Layout>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>当有大量结构化的数据需要展现时；</p>
                    <p>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</p>
                </div>
                <Row>
                    <Col span={24}>
                        <div className='base-style'>
                            <h3 id='basic'>基础表格</h3>
                            <Divider />
                            <Table1 />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className='base-style'>
                            <h3 id='JSX'>JSX表格</h3>
                            <Divider orientation='left'>JSX表格</Divider>
                            <Table2 />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className='base-style'>
                            <h3 id='JSX'>可选择表格</h3>
                            <Divider orientation='left'>可选择表格</Divider>
                            <Table3 />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className='base-style'>
                            <h3 id='sort'>可筛选排序表单</h3>
                            <Divider orientation='left'>可筛选排序表格</Divider>
                            <Table4 />
                        </div>
                    </Col>
                </Row>
                
            </Layout>
        )
    }
}

export default TableView