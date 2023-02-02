import {useEffect, useState} from "react";
import CardList from "./components/CardList";
import Pagination from "./components/Pagination";

function App() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchData();
  },[])
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = user.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <CardList user={currentPosts} />
      <Pagination
        totalPosts={user.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
