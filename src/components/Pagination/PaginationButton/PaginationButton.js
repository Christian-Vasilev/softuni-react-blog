import {
    Link
} from 'react-router-dom';

const PaginationButton = ({ link, handlePaginationApiUri }) => {
    if (link.label.split(' ').includes('Previous')) {
        return (
            <li className="page-item">
                <Link to='/' onClick={() => handlePaginationApiUri(link.url)}>
                    <i className="fas fa-angle-double-left"></i>
                </Link>
            </li>
        )
    } else if (link.label.split(' ').includes('Next')) {
        return (
            <li className="page-item">
                <Link to='/' onClick={() => handlePaginationApiUri(link.url)}>
                    <i className="fas fa-angle-double-right"></i>
                </Link>
            </li>
        )
    } else {
        return (
            <li className={`page-item${link.active ? ' active' : ''}`} onClick={() => handlePaginationApiUri(link.url)}>
                <Link to='/'>
                    {link.label}
                </Link>
            </li>
        )
    }

}

export default PaginationButton;