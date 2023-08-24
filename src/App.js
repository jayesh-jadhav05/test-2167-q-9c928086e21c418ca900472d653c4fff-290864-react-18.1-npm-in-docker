import { useEffect, useState } from 'react';
import './App.css';
import BasicTabs from './Components/Tabs/BasicTabs';

const SearchBar = () => {

    const [cityesdata, setCitysData] = useState([]);
    const [bgImg, setBgimg] = useState('https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg')
    const [searchInput, setSearchInput] = useState();
    const [searchedData, setSearchData] = useState(null);

    const fetchData = async () => {
        const res = await fetch('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1458/data.json');
        const data = await res.json();
        setCitysData(data);
    };

    useEffect(() => {
        fetchData();
    }, [])

    // Style The Main container and Change Background Image
    const styles = {
        container: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
            background: `url(${bgImg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            paddingTop: '1rem',
            gap: '1rem'
        },
    };

    const handleSearch = () => {
        let searchResult = cityesdata.filter((item) => item.name.toLowerCase() === searchInput.toLowerCase());
        const [obj] = searchResult;
        let imgurl = obj.backgroundUrl;
        setBgimg(imgurl);
        setSearchData(obj)
    };

    return (
        <div className='search-container' style={styles.container}>
            <div className='whether-div'>
                <div></div>
                <div style={{ color: 'black' }}>
                    {
                        searchedData !== null ? <div className='show-whether' id="weather-data">
                            <img src={searchedData.weather.icon} alt='icon' />
                            <h3>{searchedData.weather.temp}</h3>
                            <h6>{searchedData.weather.main}</h6>
                        </div>
                            : cityesdata.length > 0 && <div className='show-whether'>
                                <img src={cityesdata[0].weather.icon} alt='icon' />
                                <h3>{cityesdata[0].weather.temp}</h3>
                                <h6 style={{ fontSize: '1.1rem', color: 'white' }}>{cityesdata[0].weather.main}</h6>
                            </div>
                    }
                </div>
            </div>
            <div className='search'>
                <h4 className='city-name'>{searchedData !== null ? searchedData.name : 'New Delhi'}</h4>
                <div className='inputs-div'>
                    <input type='text' placeholder='New Delhi' id='search-input' onChange={(e) => setSearchInput(e.target.value)} />
                    <button id='btn-submit' onClick={handleSearch}>Search</button>
                </div>
            </div>
            {
                searchedData != null ? <BasicTabs cites={searchedData.categories} />
                    : cityesdata.length > 0 && <BasicTabs cites={cityesdata[0].categories} />
            }

        </div>
    )
};


function App() {
    return (
        <div className="App">
            <SearchBar />
        </div>
    );
}

export default App;