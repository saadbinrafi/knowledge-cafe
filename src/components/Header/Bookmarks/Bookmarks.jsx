import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className=' bg-red-200 md:w-1/3 pt-4 ml-4 my-5'>
            <div>
                <h3 className='bg-green-200 py-5  text-3xl rounded-lg px-4 mx-5 mt-8 font-semibold'>Reading Time : {readingTime} minute</h3>
            </div>



            
            <h3 className="text-2xl font-bold text-center py-5 ">Bookmarked blogs: {bookmarks.length}</h3>
            <div className='my-5 border-red-600'>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};



Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
    
}
export default Bookmarks;