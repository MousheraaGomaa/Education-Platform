import './list-item.css'

const ListItem = ({ title, duration, icon,active,handleClick }) => {
    return (
        <div className={`item ${active?'active':''}`} onClick={handleClick} >
            <span className="icon" >
                {
                    icon
                }
            </span>
            <h6>{title}</h6>
            <p>{duration}</p>
        </div>
    )
}

export default ListItem;