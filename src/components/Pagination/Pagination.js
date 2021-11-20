import PaginationButton from './PaginationButton';

const Pagination = ({
    pagination: {
        links,
    },
    handlePaginationApiUriUpdate
}) => {

    const handlePaginationApiUri = (url) => {
        if (url !== null) {
            const test = new URL(url);

            return handlePaginationApiUriUpdate(test.pathname + test.search);
        }

        return false;
    }

    return (
        <div className="pagination-wrap mb-50">
            <nav>
                <ul className="pagination">
                    {links.map((link, index) => <PaginationButton key={index} link={link} handlePaginationApiUri={handlePaginationApiUri}/>)}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;