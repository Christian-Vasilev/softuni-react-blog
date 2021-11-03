export default (props) => {
    return (
        <li>
            <a href={props.href}>
                {props.name}
            </a>
        </li>
    );
}