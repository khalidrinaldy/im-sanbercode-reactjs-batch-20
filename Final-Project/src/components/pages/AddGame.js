import React, {useState, useEffect, useContext} from 'react';
import {GameContext} from '../Context/GameProvider';
import {UserContext} from '../Context/UserProvider';
import { Form, Input, InputNumber, Button, message } from 'antd';
import {useHistory, Redirect} from 'react-router-dom';
import axios from 'axios';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
};

const AddGame = (props) => {
    const [gameList, setGameList] = useContext(GameContext);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const [input, setInput] = useState({
        name: "",
        release: "",
        singlePlayer: false,
        multiplayer: false,
        genre: "",
        platform: "",
        image_url: ""
    });
    const [form] = Form.useForm();


    useEffect(() => {
        if (props.id !== undefined) {
            let find = gameList.find((item) => item.id === props.id);
            form.setFieldsValue({
                name: find.name,
                release: find.release,
                singlePlayer: find.singlePlayer,
                multiplayer: find.multiplayer,
                genre: find.genre,
                platform: find.platform,
                image_url: find.image_url
            });
            setInput({
                name: find.name,
                release: find.release,
                singlePlayer: find.singlePlayer,
                multiplayer: find.multiplayer,
                genre: find.genre,
                platform: find.platform,
                image_url: find.image_url
            })
        }
    }, [])

    
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name
        switch (name){
        case "name":{
            setInput({...input, name: value})
            break;
        }
        case "release":{
            setInput({...input, release: value})
            break;
        }
        case "singlePlayer":{
            setInput({...input, singlePlayer: !input.singlePlayer})
            console.log(input.singlePlayer);
            break;
        }
        case "multiplayer":{
            setInput({...input, multiplayer: event.target.checked})
            break;
        }
        case "genre":{
            setInput({...input, genre: value})
            break;
        }
        case "platform":{
            setInput({...input, platform: value})
            break;
        }
        case "image_url":{
            setInput({...input, image_url: value})
            break;
        }
        default:{break;}
        }
    }

    const key = 'updatable';

    const openMessage = () => {
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
            message.success({ content: 'Success!', key, duration: 2 });
        }, 1000);
    };
    
    const handleSubmit = (event) => {
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
            name: input.name,
            release: input.release,
            singlePlayer: input.singlePlayer,
            multiplayer: input.multiplayer,
            genre: input.genre,
            platform: input.platform,
            image_url: input.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        .then((res) => {
            openMessage();
            setInput({
                name: "",
                release: "",
                singlePlayer: false,
                multiplayer: false,
                genre: "",
                platform: "",
                image_url: ""
            });
            history.push("/game-editor");
            history.go(0);
        })
    }

    const handleEdit = (event) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${props.id}`, {
            name: input.name,
            release: input.release,
            singlePlayer: input.singlePlayer,
            multiplayer: input.multiplayer,
            genre: input.genre,
            platform: input.platform,
            image_url: input.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        .then((res) => {
            openMessage();
            setInput({
                name: "",
                release: "",
                singlePlayer: false,
                multiplayer: false,
                genre: "",
                platform: "",
                image_url: ""
            });
            history.push("/game-editor");
            history.go(0);
        })
    }

    return (
        <div className="add-game">
            <h1>Add or Edit a Game</h1>
            <Form {...layout} className="form-add" onFinish={props.id !== undefined ? handleEdit : handleSubmit} form={form}>
                <Form.Item
                    name={'name'}
                    label="Name"
                >
                    <input type="text" name="name" value={input.name} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item
                    name={'release'}
                    label="Release Year"
                >
                    <input type="number" name="release" value={input.release} onChange={handleChange} min={1900} max={2077} className="input input-number"/>
                </Form.Item>
                <Form.Item label="Category">
                    <input type="checkbox" checked={input.singlePlayer} onChange={handleChange} name="singlePlayer" /> Singleplayer
                    <input type="checkbox" defaultChecked={input.multiplayer} onChange={handleChange} name="multiplayer" style={{marginLeft: "20px"}}/> Multiplayer
                </Form.Item>
                <Form.Item
                    name={['genre']}
                    label="Genre"
                >
                    <input type="text" name="genre" value={input.genre} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item
                    name={['platform']}
                    label="Platform"
                >
                    <textarea type="text" name="platform" value={input.platform} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item
                    name={['image_url']}
                    label="Image Url"
                >
                    <textarea type="text" name="image_url" value={input.image_url} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddGame;