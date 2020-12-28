import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const FruitContext = createContext();
export const NameFruit = createContext();
export const PriceFruit = createContext();
export const WeightFruit = createContext();
export const IdFruit = createContext();

const FruitProvider = (props) => {
    const [fruitList, setFruitList] = useState([]);
    const [inputName, setInputName] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [inputWeight, setInputWeight] = useState("");
    const [editId, setEditId] = useState("");

    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then((res) => setFruitList(res.data))
    }, []);

    return (
        <FruitContext.Provider value={[fruitList, setFruitList]}>
            <NameFruit.Provider value={[inputName, setInputName]}>
                <PriceFruit.Provider value={[inputPrice, setInputPrice]}>
                    <WeightFruit.Provider value={[inputWeight, setInputWeight]}>
                        <IdFruit.Provider value={[editId, setEditId]}>
                            {props.children}
                        </IdFruit.Provider>
                    </WeightFruit.Provider>
                </PriceFruit.Provider>
            </NameFruit.Provider>
        </FruitContext.Provider>
    )
}

export default FruitProvider;