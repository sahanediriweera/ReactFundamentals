import Feed from './Feed';

const Home = ({ posts,fetchError,isLoading }) => {
    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'>Loading Posts</p>}
            {fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
        </main>
    )
}

export default Home
