
import { useState } from 'react';
import './SearchModal.css'


const SearchModal = (props) =>{
const [input,SetInput] = useState('');
const [coinList] = useState(props.list);

const searchList = () =>{
    const filterBy = coinList.filter(item => {
        return(item.desc.toLowerCase().includes(input.toLowerCase()))
    })
    const list = filterBy.map((item )=> (<li key={item.id} onClick={props.selected} name ='selObj' value={item.id} className='options'>
        <img alt='crypto' style={{width:'30px'}}src= {item.url} ></img> {item.desc} <img alt='select'className='select'src={require('../Icons/select.png')}></img></li>))
    return(
        <>
       {list}
        </>
    )
}
    return(
        <>
        <div className='backdrop'>
        <div className='modal'>
            <img alt='close' className='close' src={require('../Icons/close.png')} onClick={props.searchClose}></img>
       <input className='input' onChange={e => SetInput(e.target.value)} placeholder='   Search chains'></input>
       <ul>
        {searchList()}
       </ul>
       
        </div>
        </div>
        

        </>
    )
}
export default SearchModal;

/*<ul>
        {props.list.map((item,index )=> (<li key={index} onClick={props.selected} value={index} className='options'>
        <img style={{width:'30px'}}src= {item.url} ></img> {item.desc}</li>))}
       </ul> 
        {coinList.map((item )=> (<li key={item.id} onClick={props.selected} value={item.id} className='options'>
        <img style={{width:'30px'}}src= {item.url} ></img> {item.desc}</li>))}
        */