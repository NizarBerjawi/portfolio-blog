import React from 'react';
import PropTypes from 'prop-types';

const getPageRange = (size, startAt = 0) => (
  [...Array(size).keys()].map(i => i + startAt)
);

const Pagination = ({
  pagination = {},
  changePage,
  pageRange,
  visible,
}) => {
  if (!visible) { return null; }
  // The current page
  const { current_page: current } = pagination.meta;
  // The last available page of data
  const { last_page: last } = pagination.meta;

  let page = 1;
  // An array representing the range of pages
  let pages = [];
  while (page <= last) {
    const range = getPageRange(pageRange, page);
    if (range.includes(current)) {
      pages = [...range];
      break;
    }
    page += pageRange;
  }

  // Generate the page links
  const PageLinks = () => pages.map(
    (page) => {
      const isCurrent = (page === current);
      const classes = ['page-item'];

      if (isCurrent) { classes.push('active'); }
      if (page > last) { return false; }

      return (
        <li key={page} className={classes.join(' ')}>
          <a
            className="page-link"
            href={`${pagination.meta.path}?page=${page}`}
            onClick={changePage}
          >
            {page}
          </a>
        </li>
      );
    },
  );

  return (
    <nav aria-label="navigation">
      <ul className="pagination">
        <li className={'page-item'.concat(!pagination.links.prev ? ' disabled' : '')}>
          <a
            className="page-link"
            href={pagination.links.prev}
            onClick={changePage}
            aria-label="Previous"
          >
            &laquo;
          </a>
        </li>

        <PageLinks />

        <li className={'page-item'.concat(!pagination.links.next ? ' disabled' : '')}>
          <a
            className="page-link"
            href={pagination.links.next}
            onClick={changePage}
            aria-label="Next"
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.shape({}).isRequired,
  changePage: PropTypes.func.isRequired,
  pageRange: PropTypes.number,
  visible: PropTypes.bool,
};

Pagination.defaultProps = {
  pageRange: 3,
  visible: true,
};

export default Pagination;
