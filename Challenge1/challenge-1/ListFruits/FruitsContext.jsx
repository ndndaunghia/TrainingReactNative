import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const API_URL = 'https://api.github.com/repos/minhnguyenit14/mockend/readme';

export const FruitContext = createContext({});

export const FruitProvider = ({ children }) => {
  const [dataFruits, setDataFruits] = useState();

  const handleClick = () => {
    console.log(1212121);
  }

  useEffect(() => {
    fetch(API_URL)
      .then(async (res) => {
        const json = await res.json();
        const replaceJson = json.content.replace(/\n/g, '');
        const data = base64.decode(replaceJson);
        const convertJson = JSON.parse(data);
        console.log('212121', convertJson.fruits);
        setDataFruits(convertJson.fruits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <FruitContext.Provider value={{ dataFruits, handleClick }}>
      {children}
    </FruitContext.Provider>
  );
};
