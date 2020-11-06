import React, { Component, useState  } from 'react'
import { Layout, Row, Col, Tree, Divider, Input } from 'antd'

const { Search } = Input

const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
        },
      ],
    },
  ]

const TreeView1 = () => {
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    
      const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
      };

    return (
        <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
        />
    )
}

const treeData2 = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

const TreeView2 = () => {
    const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const onExpand = (expandedKeys) => {
        console.log('inExpand',expandedKeys)
        setExpandedKeys(expandedKeys)
        setAutoExpandParent(false)
    }

    const onCheck = (checkedKeys) => {
        console.log("oncheck",checkedKeys)
        setCheckedKeys(checkedKeys)
    }

    const onSelect = (selectedKeys, info) => {
        console.log('onselect',info)
        setSelectedKeys(selectedKeys)
    }

    
    return (
        <Tree
            checkable
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            treeData={treeData2}
        />
    )
    
}


const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey
  for(let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some(item=> item.key ===key)) {
          parentKey = node.key
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children)
      }
    }
  }
  return parentKey
}


class TreeView3 extends Component {

  state = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
  }

  onChange = e => {
    const { value } = e.target;
    const expandedKeys = dataList.map(item => {
      if(item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
      }
      return null
    })
    .filter((item, i, self) => item && self.indexOf(item) === i)
    console.log(expandedKeys)
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true
    })
  }

  onExpand = (expandedKeys ) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    })
  }

  render() {
    let { searchValue, expandedKeys, autoExpandParent } = this.state
    const loop = data => 
      data.map(item => {
        const index = item.title.indexOf(searchValue)
        const beforeStr = item.title.substr(0,index)
        const afterStr = item.title.substr(index + searchValue.length);
        const title = index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: '#f50' }}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
        if (item.children) {
          return { title, key: item.key, children: loop(item.children) }
        }

        return {
          title,
          key: item.key
        }
      })

    return (
      <div>
        <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
        <Tree
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          treeData={loop(gData)}
        />
      </div>
    )
  }
}

class TreeView extends Component {

    render() {
        return (
            <Layout className='animated fadeIn'>
                <div className='base-style'>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>
                        文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件
                        可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
                    </p>
                </div>
                <Row gutter={8}>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='left'>基础用法</Divider>
                            <TreeView1 />
                        </div>
                        <div className='base-style'>
                            <Divider orientation='right'>带搜索控件</Divider>
                            <TreeView3 />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='base-style'>
                            <Divider orientation='right'>受控控件</Divider>
                            <TreeView2 />
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}



export default TreeView