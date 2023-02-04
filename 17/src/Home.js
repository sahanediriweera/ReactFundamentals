import { useContext } from 'react';
import DataContext from './Context/DataContext';
import Feed from './Feed';

const Home = () => {
    const { posts,fetchError,isLoading } = useContext(DataContext);

    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>Loading Posts</p>}
            {fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
            {!isLoading && !fetchError && (posts.length? <Feed posts = {posts}/>:null)}
        </main>
    )

}

export default Home
