import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Loader from "react-loader-spinner";
import endpoint from '../endpoint';
import key from '../key';


const API_URL = `${endpoint}top-headlines?sources=cnn&apiKey=${key}`;

const CNN = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] =  useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchData = async () => { 
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  fetchData()
  }, []);

  console.log(data.articles)

  return (
    <div> {
      loading ? (
      <div>
        <h1>loading...</h1>
        <Loader
        type="Puff"
        color="rgb(172, 82, 255)"
        height={300}
        width={500}
        timeout={6000} 
        />
      </div>
      ) : (
      <div className="grid">
          {data.articles.map((component) => (
          <div className="cards" key={component.source.id}>
            <Card.Img variant='top' src={component.urlToImage} alt="img"/>
            <br />
            <h6> {component.title} </h6>
            <p>{component.description}<br /><a href={component.url} target='_blank' className="App-link">Read more...</a></p> 
            <h6>Source: <a href={component.url} target='_blank' className="App-link">{component.source.name}</a></h6>
            <h6>Published: {component.publishedAt}</h6>
          </div>
          ))}
          {error && <h1>404</h1>}
      </div>
      )}
    </div>
  );
}

export default CNN;