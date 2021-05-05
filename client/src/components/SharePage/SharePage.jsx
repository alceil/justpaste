import React, { useState,useEffect }from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import style from "./SharePage.module.css";

const SharePage = () => {
  const {id} = useParams();
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/add/${id}`,
      );


      
 console.log(result.data['content']);
      setData(result.data['content']);
      console.log(data);
    };
 
    fetchData();
  }, []);




  return (
    <div className={style.textarea_exp}>
      <h1>{data}</h1>
    </div>
  );
};

export default SharePage;
