import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header/Header';
import axios from 'axios'
import Punklist from './components/Punklist/Punklist';
import Main from './components/Main/Main';
import ThemeProvider from './store/ThemeProvider';
function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  // const [currentTheme, setCurrentTheme] = useState('')
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0xf9f33285b8BB61519954eb5c1cCDC0b45BA45bDF&order_direction=asc&offset=0');
      setPunkListData(openseaData.data.assets)
    }
    getMyNfts()
  }, [])

  return (
    <Fragment>
      <ThemeProvider>
        <Header />
        {/* <div style={{ display: 'flex' }}> */}
        {/* {punkListData.length > 0 && <PunkCard id={punkListData[1].token_id} name={punkListData[1].name} />} */}
        {punkListData.length > 0 && <Main selectedPunk={selectedPunk} punkListData={punkListData} />}
      </ThemeProvider>
      <Punklist punks={punkListData} setSelectedPunk={setSelectedPunk} />
      {/* </div> */}
    </Fragment>
  );
}

export default App;
