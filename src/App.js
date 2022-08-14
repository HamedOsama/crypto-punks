import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import axios from 'axios'
import Punklist from './components/Punklist/Punklist';
import Main from './components/Main/Main';
function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  console.log(punkListData)
  console.log(selectedPunk)
  useEffect(() => {
    console.log(1)
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0x5c823a438D5a573F9D9093C3a0b8bf06E7acd693&order_direction=asc&offset=0');
      setPunkListData(openseaData.data.assets)
      console.log(openseaData.data)
    }
    getMyNfts()
  }, [])

  return (
    <React.Fragment>
      <Header />
      {/* <div style={{ display: 'flex' }}> */}
      {/* {punkListData.length > 0 && <PunkCard id={punkListData[1].token_id} name={punkListData[1].name} />} */}
      {punkListData.length > 0 && <Main selectedPunk={selectedPunk} punkListData={punkListData} />}
      <Punklist punks={punkListData} setSelectedPunk={setSelectedPunk} />
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
