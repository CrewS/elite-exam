
import React, { Component } from 'react';
import { Table, Input, Icon, Breadcrumb, Checkbox } from 'antd';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.scss';
export default class SelectQuestion extends Component {
    state = {
        course: [1,2,3,4,5],
        chapters: ['a','b','c'],
        courseSearch: '',
        keySearch: '',
        questionList: [],
        selectedList: [],
        active: [],
        activeChapter: 'a',

    }
    componentDidMount() {
        this.getList('a');
    }
    getList = (chapter) => {
        let tmp = new Array(10).fill(0);
        const questionList =  tmp.map((t,i) => {
            let chapter = '';
            if (i < 3) {
                chapter = 'a';
            } else if (i < 6){
                chapter = 'b'
            } else {
                chapter = 'c';
            }
            return {
                id: i,
                name: `${i}`,
                chapter,
                key: i,
                // name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            }
        })
        this.setState({
            questionList: questionList.filter(x => x.chapter === chapter),
        })
    }
    onChange  = (value) => {
        this.setState({
            active:value,
        })
        // const { questionList, activeChapter, active } = this.state;
        // let activeData = active.filter((x) => x.chapter != activeChapter);
        // const addData = value.map((data) => {
        //     let qs = undefined;
        //     questionList.map((item) => {
        //         if (item.id  == data ) {
        //             qs = item;
        //         }
        //     })
        //     return qs;
        // }).filter((x) => x != undefined)
        // this.setState({
        //     active:[
        //         ...activeData,
        //         ...addData,
        //     ]
        // })
        // console.log(value,activeData,addData,questionList)
    }
    changeChapter = (chapter) => {
        this.getList(chapter)
        this.setState({

        })
    }
    outputData = () => {
        // 数据格式
        // const data = [{
        //     classid,
        //     classname,
        //     radio,
        //     multiple,
        //     checking,
        //     completion
        // }]
    }
    render() {
        const { questionList, active, chapters, activeChapter} = this.state;
        const CheckboxGroup = Checkbox.Group;
        let plainOptions = questionList.map((data) => {
            if (data.chapter == activeChapter){
                return {
                    label: data.name, value: data.id 
                }
            } else {
                return null;
            }
        })
        plainOptions = plainOptions.filter(x => x != null);
        console.log(plainOptions)
        const columns = [{
            title: '全选本页',
            dataIndex: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '单选题',
            dataIndex: 'radio',
          }, 
          {
            title: '多选题',
            dataIndex: 'multiple',
          },
          {
            title: '判断题',
            dataIndex: 'checking',
          },
          {
            title: '填空题',
            dataIndex: 'completion',
          },
            ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            }, 
            {
                key: '2',
                name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            }, 
            {
                key: '3',
                name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            }, 
            {
                key: '4',
                name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            }, 
            {
                key: '5',
                name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            }, 
            {
                key: '6',
                name: 'John Brown',
                radio: 32,
                multiple: 'New York No. 1 Lake Park',
                checking: 32,
                completion: 32,
            },
            ];
          
          // rowSelection object indicates the need for row selection
          const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };
        return (
        <div>
            <Header/>
            
            <div className="qs-container">
                    <Breadcrumb style={{margin: '20px 0'}}>
                        <Breadcrumb.Item>
                        <Icon type="folder-open" style={{marginRight: '5px'}} />
                        <span>首页</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <Icon type="folder-open" style={{marginRight: '5px'}} />
                        <span>选择范围</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="select-scope">选择范围</div>
                <div className="sidebar">
                    <div style={{textAlign: 'center',marginTop: '8px'}}>
                        <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入关键字" style={{width:"190px"}} />
                    </div>
                    <ul className="course-list">
                        <li onClick={this.changeChapter.bind(this, 'a')}>全球信息化管理</li>
                        <li onClick={this.changeChapter.bind(this, 'b')} className="active">大数据分析</li>
                        <li onClick={this.changeChapter.bind(this, 'c')}>vue学习教程</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
                <div className="main">
                    <div className="course-name">大数据分析</div>
                    <Table
                        onHeaderRow={(column) => {
                        return {
                          onClick: () => {},        // 点击表头行
                          style: {backgroundColor: '#fff'},
                        };
                        }}
                        bordered={true}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={questionList}
                        size="small"
                    />
                    <div>
                        <div>已选<span style={{color:'#0692e1'}}>100</span>题</div>
                        <div className="total">
                            <div className="total-block total-top">
                                <span className="first-span">题型</span>
                                <span>单选题</span>
                                <span>多选题</span>
                                <span>判断题</span>
                                <span>填空题</span>
                            </div>
                            <div className="total-block">
                                <span className="first-span">已选数量</span>
                                <span className="number">25</span>
                                <span className="number">30</span>
                                <span className="number">40</span>
                                <span className="number">44</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                {
                    chapters.map((data) => {
                        return  <Button key={data} style={{color: data == activeChapter ? 'red' : '#656D78'}} onClick={() => {this.setState({activeChapter: data});this.getList(data)}}>{data}</Button>
                    })
                }
            </div>
            <ul className="questionList">
                {
                    questionList.map((data) => {
                        return <div key={data.id}>id: {data.id},name:{data.name}</div>
                    })
                }
            </ul> */}
            {/* <CheckboxGroup options={plainOptions} value={this.state.active} onChange={this.onChange} /> */}
            <Footer />
        </div>
        );
    }
}