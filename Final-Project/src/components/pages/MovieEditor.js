import React, {useState, useEffect, useContext} from 'react';
import {MovieContext} from '../Context/MovieProvider';
import {UserContext} from '../Context/UserProvider';
import {Link} from 'react-router-dom';
import { Table, Input, Button, Space, message } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import { SearchOutlined } from '@ant-design/icons';

const key = 'updatable';

const openMessage = () => {
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
        message.success({ content: 'Success!', key, duration: 2 });
    }, 1000);
};

const MovieEditor = () => {
    const [movieList, setMovieList] = useContext(MovieContext);
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

    const year = [...new Set(movieList.map((item) => {
        return item.year;
    }))].sort();

    const rating = [...new Set(movieList.map((item) => {
        return item.rating;
    }))];

    const genre = ["Anime", "Action","Thriller", "Animation", "Adventure", "Drama", "Inspiration", "Romance", "Comedy", "Sci-fi"].sort();

    const filter = {
        year: year.map((item) => {
            let obj = {
                text: item,
                value: item
            };
            return obj;
        }),
        rating: rating.map((item) => {
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
        })
    }

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a,b) => a.title.localeCompare(b.title),
            ...getColumnSearch("title")
        },
        {
            title: "Year",
            dataIndex: "year",
            key: "year", 
            filters: filter.year,
            onFilter: (value, record) => record.year.toString().includes(value),
            sorter: (a,b) => a.year - b.year
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            filters: filter.rating,
            onFilter: (value, record) => record.rating.toString().includes(value),
            sorter: (a,b) => a.rating - b.rating
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
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
            sorter: (a,b) => a.duration - b.duration
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Link to={"/movie/edit/" + record.id}>
                    Edit
                </Link>
                <button className="button-editor" value={record.id} onClick={handleDelete}>Delete</button>
              </Space>
            ),
        },
    ];

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${event.target.value}`,
        {headers: {"Authorization" : "Bearer "+ user.token}})
        .then((res) => {
            openMessage();
            let movie = movieList.find((item) => item.id === event.target.value);
            let array = [...movieList];
            array.splice(movieList.indexOf(movie),1);
            setMovieList([...array]);
        })
    }

    return (
        <div className="movie-editor">
            <Table dataSource={movieList} columns={columns} className="movie-table" />
        </div>
    )
}

export default MovieEditor;