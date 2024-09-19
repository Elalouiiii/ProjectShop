import React, { useState } from 'react'
import CardFemmes from './CardFemmes'
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../store/featureadd/shopSliceadd';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addProducts } from '../../store/featureadd/shopSliceadd';






export default function FemmProdList() {

  const dispatch = useDispatch();

  const [article, setArticle] = useState({
    name: '',
    category: '',
    discription: '',
    price: '',
    photo: '',
  });

  function handleInput(e) {
    const { name, value } = e.target
    setArticle({ ...article, [name]: value })
  };





  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setArticle({ ...article, photo: file });
    console.log(file);

  };

  console.log(article);


  function funcAdd(e) {
    e.preventDefault()

    const formData = new FormData()

    formData.append('name', article.name)
    formData.append('category', article.category)
    formData.append('discription', article.discription)
    formData.append('price', article.price)
    formData.append('photo', article.photo)


    dispatch(addProducts(formData))
    setArticle({
      ...article,
      name: '',
      category: '',
      discription: '',
      price: '',
      photo: '',

    })
    handleClose()
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const Articles = useSelector(data)

 

  return (
    <>
      <div className='Addprod'>
        <Button variant="warning" className="btnAddProd" onClick={handleShow}>
          <strong> ADD  PRODUCT +</strong>
        </Button>

       
      </div>


      <section className="listProdAdd">
        {
          Articles?.map((item) => (
            <CardFemmes key={item._id} item={item} />
          ))


        }
        {/*************************************************MODEL NORMAL PRODUCT**************************************/}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='titreadd'>Add New Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>


              <Form.Control type="text" placeholder="Name Product*" value={article.name} name="name" onChange={handleInput} />
              <Form.Control type="text" placeholder="Category Product*" value={article.category} name="category" onChange={handleInput} />
              <Form.Control type="text" placeholder="Discription Product*" value={article.discription} name="discription" onChange={handleInput} />
              <Form.Control type="text" placeholder="Price Product*" value={article.price} name="price" onChange={handleInput} />
              <Form.Control type="file" placeholder='Photo Product*' name="photo" className="filecss" onChange={handleFileChange} />



            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" onClick={funcAdd} >
              Save
            </Button>
          </Modal.Footer>
        </Modal>

      </section>



    </>
  )
}
