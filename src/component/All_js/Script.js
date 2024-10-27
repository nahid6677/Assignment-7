
// const free_credit = document.getElementById('free_credit').addEventListener('click',() =>{
//     const my_account_blance = document.getElementById('my_account_blance').innerText;
// })
// console.log(my_account_blance)


// const free_credit = () =>{
//     let my_account_blance = document.getElementById('my_account_blance').innerText;
//     const addCoin = 1600000;
//     const update_my_account_blance = my_account_blance + addCoin;
//     my_account_blance = update_my_account_blance;
// }


// export {free_credit}


// import React from 'react';
import { toast } from 'react-toastify';

function ExampleComponent() {
  const showErrorToast = () => {
    toast.error("An error occurred!");
  };

  return (
    <div>
      <button onClick={showErrorToast}>Show Error Toast</button>
    </div>
  );
}

export default ExampleComponent;

