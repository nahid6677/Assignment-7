import './index.css';
import './App.css';
import Header from './component/Header';
import Available from './component/Available';
import { useState } from 'react';
import { useEffect } from 'react';
import Main from './component/Main';
import './component/css/Background-img.css';
import Selected from './component/Selected';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const inputEmail = () => {
    const myEmail = document.getElementById('inputEmail').value
    if (myEmail.includes('@')) {
      localStorage.setItem('email', myEmail)
    }
    let saveEmail = localStorage.getItem('email');
      toast.success(`${saveEmail}`);

  }
      
    // window.onload(fn())
  const [accountBlance, setAccountBlance] = useState(0);
  const handleFreeCredite = () => {
    setAccountBlance(preBlance => preBlance + 1600000)
    toast.success("Credit Added to Account");
  }

  const [plyears, setPlyears] = useState([]);
  useEffect(() => {
    fetch("Plyears.json")
      .then(res => res.json())
      .then(data => setPlyears(data))
  }, []);

  const [plyearAdd, setPlyear] = useState([]);
  const [select, setSelect] = useState(0);

  const handleSelect = (addplyear) => {
    const { price } = addplyear;
    const intPrise = +price;
    if (select <= 5 && accountBlance >= intPrise) {
      let fiND = plyearAdd.find(element => element === addplyear);
      if (fiND !== addplyear) {
        setSelect(pre => pre + 1);
        const newPlyear = [...plyearAdd, addplyear];
        setPlyear(newPlyear);
        setAccountBlance(newBlance => newBlance - intPrise);
        toast.success(`Congrates !! ${addplyear.name} is now in your squad`);
      } else {
        toast.warning("Player already selected");
      }
    }
    else if (accountBlance <= intPrise) {
      toast.error('Not Enough Money');
    }
    else if (select === 6) {
      toast.info('You have selected 6 players');
    }
  }

  const removePlayre = (plyearr) => {
    setPlyear(plyearAdd.filter(player => plyearr.cca3 !== player.cca3));
    setSelect(pre => pre - 1);
    toast.error('Player removed');
  }

  const handleSelectedBtn = (handleBTN) => {
    document.getElementById('availSelect').innerText = `Selected Players ${select}/6`;
    document.getElementById('maiN').classList.add('hidden');
    document.getElementById('abailablE').classList.remove('hidden');
    document.getElementById('availableSelect').classList.remove('hidden');
    handleBTN();
  }

  const handleAvailable = (handleBTN) => {
    document.getElementById('availSelect').innerText = `Available Players`;
    document.getElementById('maiN').classList.remove('hidden');
    document.getElementById('abailablE').classList.add('hidden');
    document.getElementById('availableSelect').classList.add('hidden');
    handleBTN();
  }

  return (
    <>
      <div className="w-full bg-white relative">
        <div className="w-10/12 mx-auto pt-5">
          <Header handleFreeCredite={handleFreeCredite} accountBlance={accountBlance} />
          <div className="sticky top-5 bg-white">
            <Available select={select} handleSelectedBtn={handleSelectedBtn} handleAvailable={handleAvailable} />
          </div>
          <div id='abailablE' className="w-full hidden pb-48">
            <div className="w-full mb-4">
              {
                plyearAdd.map(plyearr => <Selected key={plyearr.cca3} plyearr={plyearr} removePlayre={removePlayre} />)
              }
            </div>
            <button onClick={handleAvailable} className='border-slate-600 border rounded-md p-1'>
              <h2 className='bg-yellow-400 p-2 font-bold rounded-md text-lg'>Add More Player</h2>
            </button>
          </div>
          <div id='maiN' className="w-full">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 pb-72">
              {
                plyears.map(plyear => <Main key={plyear.cca3} plyear={plyear} handleSelect={handleSelect} />)
              }
            </div>
          </div>
        </div>

        <ToastContainer position="top-center" />

        <div className="absolute bottom-[850px] sm:bottom-[580px] left-10 sm:left-12 md:left-20 w-10/12 mx-auto p-3 flex justify-center items-center rounded-xl border">
          <div className="py-10 bg-slate-200 w-full rounded-xl">
            <h1 className='text-2xl font-bold text-center'>Subscribe to our Newsletter</h1>
            <p className='text-base py-5 text-center'>Get the latest updates and news right in your inbox!</p>
            <div className="w-full flex justify-center">
              <div className="flex gap-3">
                <input className='rounded-lg p-2' type="text" placeholder='Enter your email' />
                <button className='py-2 rounded-lg bg-slate-200 px-3 BTN'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <footer className='bg-slate-900 w-full pt-64'>
          <div className="w-10/12 mx-auto pb-16">
            <div className="w-full">
              <img className='mx-auto w-64 rounded-2xl' src="https://media.gettyimages.com/id/1445547522/photo/group-b-fifa-world-cup-qatar-2022.jpg?s=2048x2048&w=gi&k=20&c=F_QFztVQgzeFObWXGCa5EDr5m7bh10tCwxQmbSjKUT4=" alt="" />
            </div>
            <div className="sm:flex w-full justify-between mt-10">
              <div className="">
                <h2 className='text-xl text-white font-bold mb-2'>About Us</h2>
                <p className='text-base text-gray-100'>We are a passionate team.</p>
                <p className='text-base text-gray-100'>dedicated to providing the best </p>
                <p className='text-base text-gray-100'>services to our customers</p>
              </div>
              <div className="">
                <h2 className='text-xl text-white font-bold mb-2'>Quick Links </h2>
                <ul className='list-disc ml-5'>
                  <li className='text-base text-gray-100'>Home</li>
                  <li className='text-base text-gray-100'>Services</li>
                  <li className='text-base text-gray-100'>About</li>
                  <li className='text-base text-gray-100'>Contact</li>
                </ul>
              </div>
              <div className="">
                <h2 className='text-xl text-white font-bold mb-2'>Subscribe </h2>
                <p className='text-base text-gray-100 py-2'>
                  Subscribe to our newsletter for<br /> the latest updates.
                </p>
                <div className="rounded-lg overflow-hidden">
                  <input id='inputEmail' className='py-2 px-2' type="text" placeholder='Enter your email' />
                  <button onClick={inputEmail} className='py-2 bg-slate-200 rounded-r-lg px-3 BTN'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full">
            <p className='text-base text-gray-100 text-center py-6'>@2024 Your Company All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
