import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  deleteProduct,updateProducts } from "../../store/featureadd/shopSliceadd";


export default function CardFemmes({ item }) {

  const [article, setArticle] = useState({
    id: item._id,
    name: item.name,
    category: item.category,
    discription: item.discription,
    price: item.price,
    photo: item.photo,
  });
  function handlInput(e) {
    const { name, value } = e.target;
    setArticle(
      {
        ...article,
        [name]: value
      }
    )
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setFood({ ...article, photo: file });
  };

  console.log(article);
  const dispatch = useDispatch()

  function showOnitem() {
    handleShow();
  }


  function funDelete(e) {
    e.preventDefault();
    dispatch((deleteProduct(item._id)))
    handleClose()

  }


  

  function saveItem() {

    const formData = new FormData()


    formData.append('name',article.name)
    formData.append('category',article.category)
    formData.append('discription',article.discription)
    formData.append('price',article.price)
    formData.append('photo',article.photo)
    const id = article.id

    dispatch(updateProducts({id,formData}))
    handleClose()
    
  }



    const [show, setShow] = useState(false);

    const [showA, setShowA] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Card style={{ width: "12rem" }}>
          <Card.Img
          style={{width:'100%',height:'100%'}}
            variant="top"
            // src={testimg}
            src={'http://localhost:5555/uploads/'+item.photo}
            
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>  {item.category}</Card.Text>

            <Card.Text>{item.discription.substring(0,45)}</Card.Text>
            <Card.Text style={{fontWeight:'bold'}}>{item.price} $</Card.Text>
            <div className="manage">
              <div>
                <MdEdit onClick={showOnitem} style={{cursor:'pointer'}} />

                <MdDelete onClick={() => setShowA(prev => !prev)} style={{ color: "red",cursor:'pointer' }} />
              </div>

            </div>


          </Card.Body>
        </Card>

        {/* Modal *****/}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify The Article</Modal.Title> 
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control type="text" name="name" placeholder="Name Product*" autoFocus onChange={handlInput} value={article.name} />
              <Form.Control type="text" name="category" placeholder="Category Product*" onChange={handlInput} value={article.category} />
              <Form.Control type="text" name="discription" placeholder="Discription Product*" onChange={handlInput} value={article.discription} />
              <Form.Control type="text" name="price" placeholder="Price Product*" onChange={handlInput} value={article.price} />
              <Form.Control type="file" name="photo" className='filecss' id="" placeholder='Photo*' onChange={handleFileChange} />

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" onClick={saveItem}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal centered={true} show={showA} onHide={() => setShowA(prev => !prev)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Article</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
          <Button variant="success" onClick={() => setShowA(prev => !prev)}>
              Cancel
            </Button>
          <Button  variant="danger ml-4" onClick={funDelete} style={{cursor:'pointer'}}>
              Delete
            </Button>
           
           
          </Modal.Footer>
        </Modal>

      </>




    )
  }
