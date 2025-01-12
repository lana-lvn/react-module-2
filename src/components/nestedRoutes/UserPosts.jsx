import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchPostsByUserId } from "../../services/api";

const UserPosts = () => {
    const { userId } = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const posts = await fetchPostsByUserId(userId);
            setPosts(posts);
            console.log(posts);
            
        };
        getData();
    }, [userId])

 
  return (
    <div>
          User posts
          <ul>
              {posts.map(item => (
                  <li key={item.id}>{item.title}</li>
              ))}
          </ul>
    </div>
  )
}

export default UserPosts
