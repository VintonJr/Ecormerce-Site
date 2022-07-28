import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
export const Paginator= () => {
  return (
    <div className="pagination"  style={{ display: 'block', width: 700, padding: 30 }}>
      <Pagination>
          <Pagination.Prev />
        <Pagination.Ellipsis />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
        </Pagination>
    </div>
  )
}
export default Paginator
