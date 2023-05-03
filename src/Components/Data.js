import Card from './Card';
import './Data.css'
import React, { useState, useEffect } from 'react';
import SearchModal from './SearchModal';
const Data = () =>{
    const [data, setData] = useState(null);
    const [token,SetToken]  =useState('LTCUSDT');
    const [search,SetSearch] = useState(false);
    const [userIn,SetUserIn] = useState(null);
    const [icon,SetIcon] = useState('https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/256/LiteCoin-icon.png');

  useEffect(() => {
    if(token.length > 5){
    fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${token}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
      }
  }, [token]); 
  const tokenList = [
    {'token':"BTCUSDT",'id':1,'desc':'Bitcoin',
    'url':'https://icons.iconarchive.com/icons/pauloruberto/custom-round-yosemite/256/Bitcoin-icon.png'},
   {'token':"DOGEUSDT",'id':2,'desc':'Dogecoin',
   'url':'https://icons.iconarchive.com/icons/iconarchive/dogecoin-to-the-moon/256/Doge-icon.png'},
    {'token':"LTCUSDT",'id':3,'desc':'Litecoin',
    'url':'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/256/LiteCoin-icon.png'},
    {'token':"ETHUSDT",'id':4,'desc':'Ethereum',
    'url':'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Ethereum-icon.png'},
    {'token':"BNBUSDT",'id':5,'desc':'Binance',
    'url':'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Binance-Coin-icon.png'},
    {'token':"XRPUSDT",'id':6,'desc':'Ripple',
    'url':'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Ripple-icon.png'},
    {'token':"SOLUSDT",'id':7,'desc':'Solana',
    'url':'https://cdn-icons-png.flaticon.com/512/6001/6001527.png'},
    {'token':"ADAUSDT",'id':8,'desc':'Cardano',
    'url':'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/256/Cardano-icon.png'},
    {'token':"MATICUSDT",'id':9,'desc':'Polygon',
    'url':'https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png'},
    {'token':"DOTUSDT",'id':10,'desc':'Palkadot',
    'url':'https://cryptologos.cc/logos/polkadot-new-dot-logo.png'},
    {'token':"TRXUSDT",'id':11,'desc':'Tron',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png'},
    {'token':"SHBUSDT",'id':12,'desc':'Shiba Inu',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png'},
    {'token':"AVAXUSDT",'id':13,'desc':'Avalanche',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png'},
    {'token':"DAIUSDT",'id':14,'desc':'Dai',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png'},
    {'token':"LINKUSDT",'id':15,'desc':'ChainLink',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png'},
    {'token':"ATOMUSDT",'id':16,'desc':'Cosmos',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png'},
    {'token':"UNIUSDT",'id':17,'desc':'Uniswap',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png'},
    {'token':"XMRUSDT",'id':18,'desc':'Monero',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/328.png'},
    {'token':"OKBUSDT",'id':19,'desc':'OKB',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/3897.png'},
    {'token':"TONUSDT",'id':20,'desc':'Toncoin',
    'url':'https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png'}
  ];

  const InputHandler = (event) =>{
    SetSearch(true);
  }
  const closeHandler = () =>{
    SetSearch(false);
  }
  const selectHandler = (event) =>{
    SetSearch(false);
    const check = tokenList.find(item => item.id === event.target.value);
    const value = check? check['token'] : 'LTCUSDT';
    const imgUrl = check? check['url'] : 'https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-6/256/LiteCoin-icon.png'; 
    SetToken(value);
    SetIcon(imgUrl);
  }
    return(
        <>
        {search && (<SearchModal searchClose = {closeHandler} selected = {selectHandler} list={tokenList}></SearchModal>)}
        <Card img={icon}>
            <form className='labels'>
            <div className='divStyle'>
                <label >Current Value </label>
                {data && <span className='amount'> ₹{Math.ceil(data.price * 80)}</span>}
                </div>
                <label htmlFor='token' ></label>

                <div className='dropdown' onClick={InputHandler} list="tokenList" name="tokenList" id="token">
                
                  <img alt='crypto'style={{width:'30px' ,paddingLeft:'1rem'}} src={icon}></img>
                  <span className='dropTitle'>{(tokenList.find(item => item.token === token)) && (tokenList.find(item => item.token === token))['desc']}</span>
                  
                  <img alt='dropdown' style={{position:'absolute', left:'60%'}} src={require('../Icons/dropdown.png')}></img>
                  </div>

                <label  htmlFor='input'>Amount you want to invest</label>
                <div className='input-container'>
                <input className='inputFields values' onChange={e => SetUserIn(e.target.value)}type='number' placeholder='0.00' id='input' min={0}></input>
                <span className='unit'>INR</span>
                </div>
                <label  htmlFor='conversion'>Estimate Number of {token.substring(0,3)} You Will Get</label>
                <input className='disabled values' id='conversion'type='number' placeholder={ data && Math.round(userIn/Math.ceil(data.price * 80) *100)/100} disabled></input>
                <button className='butstyle'type='button' >
                    <span className='buy'>Buy</span>
                </button>
            </form>
        </Card></>
    )
}
export default Data;
