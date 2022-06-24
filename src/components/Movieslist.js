import React, {useState} from 'react';

function Movieslist({allInput}) {
  const [search, setSearch] = useState("")
  
  console.log(allInput)
  return (
    <section>
      <input type="text" className='form-control' placeholder="Search..." onChange={(e) => {setSearch(e.target.value)}} />
     {
       allInput.length < 1 ?  <div data-testid='noResult'>
       <h3 className='text-center'>No Results Found</h3>
     </div> : 

       <ul 
       className='styled w-100 pl-0' 
       data-testid='moviesList'
       >
       {
         allInput.filter((list)=> {
           if(search === ""){
             return list
            } else if (list.nameInput.toLowerCase().includes(search.toLowerCase())){
              return list
            }
          }).map((list, index) => (
            <li key={index}
            className='flex slide-up-fade-in justify-content-between'
             style={{borderBottom: '2px solid var(--primary-color)'}}
           >
             {/* {list.nameInput} */}
             <div className='layout-column w-40'>
                {/* use this header for movie name */}
                <h3 className='my-3'>{list.nameInput}</h3>
                {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                <p className='my-0'>{list.ratingsInput}</p>
              </div>
              <div className='layout-row my-auto mr-20'>
                {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                <p className='justify-content-end'>{list.durationInput}</p>
              </div>           
          </li>
         ))
       }
     </ul>
     }
    </section>
  )
}

export default Movieslist;
