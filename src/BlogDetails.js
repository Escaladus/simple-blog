import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); // parameters from url
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);
    const histori = useNavigate();
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE",

        }).then(() => {
            histori("/")
        })
    }

    return (
       <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {error && <div>{error}</div>}
           {blog && (
               <article>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={handleClick}>Delete</button>
               </article>
           )}
       </div>
    );
}

export default BlogDetails;