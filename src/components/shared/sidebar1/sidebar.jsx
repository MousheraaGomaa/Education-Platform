
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar({title,content,open,handleClose}) {

  return (
    <>
      <Offcanvas show={open} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {
                content
            }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;