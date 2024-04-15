import PropTypes from 'prop-types'
import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {title, cover, author, authorImg, reading_time, postedDate, hashtags} = blog;
    // console.log(blog)
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt={`cover pucture of the titel ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-5'>
                    <img className='w-14' src={authorImg} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} 
                        className='ml-2 text-red-600'><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>  
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className='text-purple-700 underline font-bold'>Mark As Read
            </button>

        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired ,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;