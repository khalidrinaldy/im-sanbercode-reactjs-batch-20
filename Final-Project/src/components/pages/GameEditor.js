import React, {useState, useEffect, useContext} from 'react';
import {GameContext} from '../Context/GameProvider';
import { Table, Input, Button, Space, message } from 'antd';
import Highlighter from 'react-highlight-words';
import {UserContext} from '../Context/UserProvider';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const key = 'updatable';

const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
        message.success({ content: 'Success!', key, duration: 2 });
    }, 1000);
};

const GameEditor = () => {
    const [gameList, setGameList] = useContext(GameContext);
    const [user, setUser] = useContext(UserContext);
    const [searchInput, setSearchInput] = useState("");
    const [searchColumn, setSearchColumn] = useState("");

    const getColumnSearch = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
        record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        
        render: text =>
            searchColumn === dataIndex ? (
            <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchInput]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
            />
        ) : (
            text
        ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchInput(selectedKeys[0]);
        setSearchColumn(dataIndex);
    };
    
    const handleReset = clearFilters => {
        clearFilters();
        setSearchInput("");
    };

    const release = [...new Set(gameList.map((item) => {
        return item.release;
    }))].sort();

    const genre = ["Adventure", "Horor", "RPG", "Simulation", "Action", "Battle Royale", "Battle Arena", "Strategy", "Third-person shooter", "Sport"].sort();
    
    const platform = ["PlayStation 4", "PC", "Xbox One", "Xbox 360", "Microsoft Windows", "Linux", "Android", "IOS", "Nintendo Switch", "PlayStation 5"].sort();

    const filter = {
        release: release.map((item) => {
            let obj = {
                text: item,
                value: item
            };
            return obj;
        }),
        genre: genre.map((item) => {
            let obj = {
                text: item,
                value: item,
            };
            return obj;
        }),
        platform: platform.map((item) => {
            let obj = {
                text: item,
                value: item,
            };
            return obj;
        })
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a,b) => a.name.localeCompare(b.name),
            ...getColumnSearch("name")
        },
        {
            title: "Release",
            dataIndex: "release",
            key: "release", 
            filters: filter.release,
            onFilter: (value, record) => record.release.toString().includes(value),
            sorter: (a,b) => a.release - b.release
        },
        {
            title: "Genre",
            dataIndex: "genre",
            key: "genre",
            filters: filter.genre,
            onFilter: (value, record) => record.genre.toLowerCase().includes(value.toLowerCase()),
            sorter: (a,b) => a.genre.localeCompare(b.genre)
        },
        {
            title: "Platform",
            dataIndex: "platform",
            key: "platform",
            filters: filter.platform,
            onFilter: (value, record) => record.platform.toLowerCase().includes(value.toLowerCase()),
            sorter: (a,b) => a.platform.localeCompare(b.platform)
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Link to={"/game/edit/" + record.id}>
                    Edit
                </Link>
                <button className="button-editor" value={record.id} onClick={handleDelete}>Delete</button>
              </Space>
            ),
        },
    ];

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${event.target.value}`,
        {headers: {"Authorization" : "Bearer "+ user.token}})
        .then((res) => {
            openMessage();
            let game = gameList.find((item) => item.id === event.target.value);
            let array = [...gameList];
            array.splice(gameList.indexOf(game),1);
            setGameList([...array]);
        })
    }

    return (
        <div className="game-editor">
            <Table dataSource={gameList} columns={columns} className="game-table" />
        </div>
    )
}

export default GameEditor;