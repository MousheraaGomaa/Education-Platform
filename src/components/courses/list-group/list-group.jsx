
import ListItem from '../list-item/list-item';

import './list-group.css';

const ListGroup = ({ title, list, icon,isActive, clickHandle }) => {
    return (
        <div className="list-container">
            <h3>{title}</h3>
            <div className="list-content">
                {
                    list.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                {...item}
                                icon={icon}
                                active={isActive?isActive(item):false}
                                handleClick={()=>clickHandle(item)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListGroup;