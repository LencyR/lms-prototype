const Home = () => {

    const handleClick = (name) => {
        console.log('hello, ' + name);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={() => handleClick('mario')}>Click me</button>
        </div>
    );
}
 
export default Home;