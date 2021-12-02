import { useEffect, useState } from "react";
import endpoint from '../endpoint';
import key from '../key';
import { useParams } from "react-router";

const API_URL = `${endpoint}top-headlines?sources=usa-today&apiKey=${key}`

const UsaTodayArticles = () => {
  const {id} = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] =  useState(true);

  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };
  fetchData()
  }, []);

  console.log(1)

  return (
    <div>
            { loading ? (
                <div> 
                    <p> Please wait ... </p>
                </div>
            ) : (
                <div> 
                    {/* { data.articles.map((i,j) => (
                        <div key={i.id}>
                            { i[j] = +id ? (
                                <div> 
                                <h1 className="title">Title: {i.title}</h1>
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    ))}  */}
                    <h1>hi</h1>
                </div>
            )}
        </div>
    )

}

export default UsaTodayArticles;