import clsx from "clsx";
 import css from "./Pagination.module.css"


 const Pagination = ({ contactsPerPage, totalContacts, paginate, currentPage }) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
     pageNumbers.push(i);
   }
 
   const addActiveClass = (pageNumber) => {
     return clsx(css.pageItem, { [css.activePage]: pageNumber === currentPage });
   };
   return (
     <nav>
       <ul className={css.pagination}>
         {pageNumbers.map((number) => (
           <li key={number} className={addActiveClass(number)}>
             <a onClick={() => paginate(number)} href="#" className={css.pageLink}>
               {number}
             </a>
           </li>
         ))}
       </ul>
     </nav>
   );
 };
 
 export default Pagination;
 