import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import propTypes from 'prop-types'

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    

    } ,[])

    return (
        <div className='md:w-2/3'>
            <h1 className='text-3xl font-bold py-5'>Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead ={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: propTypes.func,
    handleMarkAsRead: propTypes.func
}
export default Blogs;