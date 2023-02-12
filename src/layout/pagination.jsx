import React, { Component } from 'react';

function Paginate(){ 
    const [currentPage, setCurrentPage] = React.useState(1);
    let maxPages = 10;
    let items = [];
    let leftSide = currentPage - 2;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = currentPage + 2;
    if(rightSide>maxPages) rightSide = maxPages;
    for (let number = leftSide ; number <= rightSide; number++) {
        items.push(
            <li key={number}><a className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
            {number}
            </a></li>
        );
    }
    const nextPage = () => {
        if(currentPage<maxPages){
            setCurrentPage(currentPage+1)
        }
    }
  
    const prevPage = () => {
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }
  
    const paginationRender = (
        <div className="pagination-area d-flex flex-wrap justify-content-center">
            <ul className="pagination d-flex flex-wrap m-0"> 
                <li><a className="round-effect" onClick={prevPage}> <i className="icofont-thin-double-left"></i> </a></li>
                {items}
                <li> <a className="round-effect" onClick={nextPage}> <i className="icofont-thin-double-right"></i> </a></li>
            </ul>
        </div>
    );
    return (paginationRender);
}
export default Paginate;