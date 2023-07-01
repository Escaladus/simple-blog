import {Link} from "react-router-dom";

export default function BlogList({blogs, title}) {
    //const {blogs, title} = props;

    return (
        <div className="blog-list">
            <>
                <h2>{title}</h2>
            </>
            {blogs.map((blog, index) => {
                return(
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                        </Link>
                            <h5>By: { blog.author }</h5>
                    </div>
                )
            })}
        </div>
    );

}