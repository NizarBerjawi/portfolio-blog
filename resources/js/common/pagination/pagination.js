import React from 'react';
import { Link } from 'react-router-dom';

let Pagination = ({ pagination = {}, changePage, pageRange = 3, visible = true }) => {
  if (!visible) { return null; }
  // The current page
  const current = pagination.meta.current_page;
  // The last available page of data
  const last = pagination.meta.last_page;
  // The location of the center pagination
  const center = Math.ceil(pageRange / 2);
  // AN array representing the range of pages
  const pages = [...Array(pageRange).keys()].map(x => x + 1);

  // Generate the page links
  const PageLinks = () => pages.map(
    (page) => {
      const isCurrent = (page === current);
      let classes = ['page-item'];

      if (isCurrent) { classes.push('active'); }
      if (page > last) { return false; }

      return (
        <li key={page} className={classes.join(' ')}>
          <a
            className="page-link"
            href={`${pagination.meta.path}?page=${page}`}
            onClick={changePage}>
              {page}
          </a>
        </li>
      );
    }
  );

  return (
    <nav aria-label="navigation">
      <ul className="pagination">
        <li className={'page-item'.concat(!pagination.links.prev ? ' disabled' : '')}>
          <a
            className="page-link"
            href={pagination.links.prev}
            onClick={changePage}
            aria-label="Previous">&laquo;
          </a>
        </li>

        <PageLinks />

        <li className={'page-item'.concat(!pagination.links.next ? ' disabled' : '')}>
          <a
            className="page-link"
            href={pagination.links.next}
            onClick={changePage}
            aria-label="Next">&raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
