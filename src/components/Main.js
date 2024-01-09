// import React from 'react';

// const Main = () => {
//     const  rows =Array.from(document.querySelector('tr'))
// function slideOut(row){
//     row.classList.add('slide-out')
// }
// function slideIn(row,index){
//     setTimeout(function(){
//         row.classList.remove('slide-out')
//     },(index + 5)* 200)
// }
// row.forEach(slideOut)
// rows.forEach(slideIn)
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Main;


import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    const rows = document.querySelectorAll('tr');

    function slideOut(row) {
      row.classList.add('slide-out');
    }

    function slideIn(row, index) {
      setTimeout(function () {
        row.classList.remove('slide-out');
      }, (index + 1) * 200);
    }

    rows.forEach(slideOut);
    rows.forEach(slideIn);
  }, []); // Empty dependency array to run the effect only once after the initial render

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
};

export default Main;
