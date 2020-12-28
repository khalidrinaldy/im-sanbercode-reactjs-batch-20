import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FruitProvider from './FruitProvider';
import Form from './Form';
import Table from './Table';

const Main = () => {
    return (
        <div className="div-tugas14">
            <FruitProvider>
                <Table />
                <Form />
            </FruitProvider>
        </div>
    )
}

export default Main;