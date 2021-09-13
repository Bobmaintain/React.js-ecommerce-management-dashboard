import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { Button, Table, Container, Modal } from "react-bootstrap";

function Home(){

  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemToDelete, setItemToDelete] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (obj) => {setShow(true); setItemToDelete(obj);}

  useEffect(() => {
    let mounted = true;
    getProducts().then( products => {
      if(mounted){
        setProducts(products);
        console.log(products);
      }
    })
    return () => mounted = false;
  }, []);

  return (

    <Container className='mt-5'>

      <h2 style={{textDecoration:"underline"}}>Products</h2>

     <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Name</th>
           <th>Price</th>
           <th>Available</th>
           <th>Description</th>
           <th>Edit</th>
           <th>Delete</th>
         </tr>
       </thead>

       <tbody>
       {products.map( (item, i) => { return (
         <tr key={i}>
           <td>{i + 1}</td>
           <td>{item.name}</td>
           <td>Q{item.price}</td>
           <td>{item.ammount}</td>
           <td>{item.description}</td>
           <td><Button variant="warning" href={"/update/"+item._id}>Edit</Button></td>
           <td><Button variant="danger" onClick={() => handleShow(item)}>Delete</Button></td>
         </tr>
        ) } )
       }
       </tbody>
     </Table>

     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Confirm</Modal.Title>
       </Modal.Header>
       <Modal.Body>Remove {itemToDelete.name}</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Cancel
         </Button>
         <Button variant="danger" onClick={handleClose}>
           Yes, remove
         </Button>
       </Modal.Footer>
     </Modal>

     </Container>
  )   
}

export default Home;