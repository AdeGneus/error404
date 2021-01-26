import scare from './Scarecrow.png';

const Main = () => {
    return (
        <div className="main">
          <img src={scare} alt="error 404" />
          <div className="aside">
            <h1>I have bad news for you</h1>
            <p>The page you are looking for might be removed or is temporaily unavailable</p>
            <button>back to homepage</button>
          </div>
        </div>
    );
}
 
export default Main;