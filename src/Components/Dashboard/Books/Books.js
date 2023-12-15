import React, { useState } from 'react'
import { useFormik } from "formik";
import {Schema} from './Schema';

function Books() {
  const [res,setRes]=useState([]);
    const initialValues = {
      BookISBN: "",
      BookTitle: "",
      BookAuthor: "",
      BookGenre: "",
      BookSummary:"",
      BookLink:"",
      UserName:""
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Schema,
      onSubmit: (values, action)=> {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-Token':localStorage.getItem("token")
          },
          body: JSON.stringify(values)
        };
        fetch(`${process.env.REACT_APP_API_BASE_URL}book/addBook`, options)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setRes(data);
            if(data.success){
              action.resetForm();
            }
          })
          .catch(error => console.error(error));
      },
    })
    return (
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="card" style={{backgroundColor:'#2F4049'}}>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5">
                      <p className="text-center h1 fw-bold" style={{color:'white'}}>Add Book</p>
                      <form onSubmit={handleSubmit}>
      
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fas-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                            type="text" 
                            name="BookISBN"
                            id="BookISBN"
                            value={values.BookISBN}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="form-control" 
                            />
                            <label className="form-label" style={{color:'white'}} htmlFor="BookISBN">Book ISBN</label>
                            {errors.BookISBN && touched.BookISBN ? (
                              <p className="text-danger">{errors.BookISBN}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fas-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                            type="text" 
                            name="BookTitle"
                            id="BookTitle"
                            value={values.BookTitle}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="form-control" 
                            />
                            <label className="form-label" style={{color:'white'}} htmlFor="BookTitle">Book Title</label>
                            {errors.BookTitle && touched.BookTitle ? (
                              <p className="text-danger">{errors.BookTitle}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fas-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input 
                            type="text" 
                            name="BookAuthor"
                            id="BookAuthor"
                            value={values.BookAuthor}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="form-control" 
                            />
                            <label className="form-label" style={{color:'white'}} htmlFor="BookAuthor">Book Author</label>
                            {errors.BookAuthor && touched.BookAuthor ? (
                              <p className="text-danger">{errors.BookAuthor}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fas-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                           <input 
                            type="text" 
                            name="BookGenre"
                            id="BookGenre"
                            value={values.BookGenre}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="form-control" 
                            />
                            <label className="form-label" style={{color:'white'}} htmlFor="BookGenre">Book Genre</label>
                            {errors.BookGenre && touched.BookGenre ? (
                              <p className="text-danger">{errors.BookGenre}</p>
                            ) : null}
                          </div>
                        </div>      
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fas-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                           <textarea
                            name="BookSummary"
                            id="BookSummary"
                            value={values.BookSummary}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="form-control" 
                            rows={5}
                            />
                            <label className="form-label" style={{color:'white'}} htmlFor="BookSummary">Book Summary</label>
                            {errors.BookSummary && touched.BookSummary ? (
                              <p className="text-danger">{errors.BookSummary}</p>
                            ) : null}
                          </div>
                        </div>   
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fas-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                           <input 
                            type="url" 
                            name="BookLink"
                            id="BookLink"
                            value={values.BookLink}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className="form-control" 
                            />
                            <label className="form-label" style={{color:'white'}} htmlFor="BookLink">Book Link if any. </label>
                            {errors.BookLink && touched.BookLink ? (
                              <p className="text-danger">{errors.BookLink}</p>
                            ) : null}
                          </div>
                        </div>     
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-dark btn-lg" type="submit">Add Book</button>
                        </div>
                      </form>
                          {res?.success===true? <p className="mt-2 text-center text-success">{res?.message}</p>:''}
                          {res?.success===false? <p className="mt-2 text-center text-danger">{res?.message}</p>:''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }

  export default Books;