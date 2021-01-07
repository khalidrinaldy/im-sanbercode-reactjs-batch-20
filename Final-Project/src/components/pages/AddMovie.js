import React, {useState, useEffect, useContext} from 'react';
import {MovieContext} from '../Context/MovieProvider';
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

const AddMovie = (props) => {
    const [movieList, setMovieList] = useContext(MovieContext);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const [input, setInput] = useState({
        title: "",
        year: "",
        rating: 0,
        genre: "",
        duration: 0,
        description: "",
        review: "",
        image_url: ""
    });
    const [edit, setEdit] = useState({});
    const [form] = Form.useForm();


    useEffect(() => {
        if (props.id !== undefined) {
            let find = movieList.find((item) => item.id === props.id);
            form.setFieldsValue({
                title: find.title,
                year: find.year,
                rating: find.rating,
                genre: find.genre,
                duration: find.duration,
                description: find.description,
                review: find.review,
                image_url: find.image_url
            });
            setInput({
                title: find.title,
                year: find.year,
                rating: find.rating,
                genre: find.genre,
                duration: find.duration,
                description: find.description,
                review: find.review,
                image_url: find.image_url
            })
        }
    }, [])

    
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name
        switch (name){
        case "title":{
            setInput({...input, title: value})
            break;
        }
        case "year":{
            setInput({...input, year: value})
            break;
        }
        case "rating":{
            setInput({...input, rating: value})
            break;
        }
        case "genre":{
            setInput({...input, genre: value})
            break;
        }
        case "duration":{
            setInput({...input, duration: value})
            break;
        }
        case "description":{
            setInput({...input, description: value})
            break;
        }
        case "review":{
            setInput({...input, review: value})
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
        axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
            title: input.title,
            year: input.year,
            rating: input.rating,
            genre: input.genre,
            duration: input.duration,
            description: input.description,
            review: input.review,
            image_url: input.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        .then((res) => {
            openMessage();
            setInput({
                title: "",
                year: "",
                rating: 0,
                genre: "",
                duration: 0,
                description: "",
                review: "",
                image_url: ""
            });
            history.push("/movie-editor");
            history.go(0);
        })
    }

    const handleEdit = (event) => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${props.id}`, {
            title: input.title,
            year: input.year,
            rating: input.rating,
            genre: input.genre,
            duration: input.duration,
            description: input.description,
            review: input.review,
            image_url: input.image_url
        },{headers: {"Authorization" : "Bearer "+ user.token}})
        .then((res) => {
            openMessage();
            setInput({
                title: "",
                year: "",
                rating: 0,
                genre: "",
                duration: 0,
                description: "",
                review: "",
                image_url: ""
            });
            history.push("/movie-editor");
            history.go(0);
        })
    }

    return (
        <div className="add-movie">
            <h1>Add or Edit a Movie</h1>
            <Form {...layout} className="form-add" onFinish={props.id !== undefined ? handleEdit : handleSubmit} form={form}>
                <Form.Item
                    name={'title'}
                    label="Title"
                >
                    <input type="text" name="title" value={input.title} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item
                    name={'year'}
                    label="Year"
                >
                    <input type="number" name="year" value={input.year} onChange={handleChange} min={1900} max={2077} className="input input-number"/>
                </Form.Item>
                <Form.Item
                    name={['rating']}
                    label="Rating"
                >
                    <input type="number" name="rating" value={input.rating} onChange={handleChange} min={0} max={10} className="input input-number"/>
                </Form.Item>
                <Form.Item
                    name={['genre']}
                    label="Genre"
                >
                    <input type="text" name="genre" value={input.genre} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item
                    name={['duration']}
                    label="Duration"
                >
                    <input type="number" name="duration" value={input.duration} onChange={handleChange} className="input input-number"/>
                </Form.Item>
                <Form.Item
                    name={['description']}
                    label="Description"
                >
                    <textarea type="text" name="description" value={input.description} onChange={handleChange} className="input input-text"/>
                </Form.Item>
                <Form.Item
                    name={['review']}
                    label="Review"
                >
                    <textarea type="text" name="review" value={input.review} onChange={handleChange} className="input input-text"/>
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

export default AddMovie;