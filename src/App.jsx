import { useEffect, useState } from 'react'
import { ClipLoader, ClockLoader } from "react-spinners"
import useApi from './hooks/useApi'
const App = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { data, error, loading } = useApi("https://jsonplaceholder.typicode.com/todos");
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const resultData = await result.json();
  //     console.log(resultData);
  //     setTimeout(() => {

  //     }, 2000);

  //     setData(resultData);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.message);

  //   } finally {
  //     setLoading(false);
  //   }
  // }
  useEffect(() => {
    // fetchData();

  }, [])


  return (
    <div>
      {loading ? <ClipLoader color='red' size={50} /> : <div>
        <h1>
          Title of something.....
        </h1>

        <ul>
          {data && data.map((single, index) => <li key={index}>{single.title}</li>)}
        </ul>
      </div>}
    </div>

  )
}

export default App