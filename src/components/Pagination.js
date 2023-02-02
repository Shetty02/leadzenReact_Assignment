import React from "react";

import "./Pagination.css";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    const nextPage = () =>{
        if(currentPage < pages.length){
            setCurrentPage(currentPage + 1)
        }
        else{
            setCurrentPage(1);
        }
    }
    const prevPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='pagination'>
          <button onClick={prevPage}  > {"<"}</button>
            {pages.map((page, index) => {
                return (<>
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className= {page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                            </>
                );
            })}
         <button onClick={nextPage}> {">"}</button>
        </div>
    );
};

export default Pagination;
