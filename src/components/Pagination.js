import {
    useLocation,
    Link
} from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default (props) => {
    let query = useQuery();
    let itemsCount = props.itemsCount;
    let pages = [...Array(itemsCount).keys()];
    let currentPage = parseInt(query.get('page'));
    let nextPage = currentPage + 1 > pages.length ? pages.length : currentPage + 1;
    let previousPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;

    return (
        <div className="pagination-wrap mb-50">
            <nav>
                <ul className="pagination">
                    <li key={'previous'} className="page-item">
                        <Link to={`${useLocation().pathname}?page=${previousPage}`}>
                            <i className="fas fa-angle-double-left"></i>
                        </Link>
                    </li>

                    {pages.map(page => {
                        return (
                            <li key={page} className={`page-item ${page + 1 == currentPage && 'active'}`}>
                                <Link to={`${useLocation().pathname}?page=${page + 1}`}>
                                    {page + 1}
                                </Link>
                            </li>
                        )
                    })}

                    <li key={'next'} className="page-item">
                        <Link to={`${useLocation().pathname}?page=${nextPage}`}>
                            <i className="fas fa-angle-double-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}