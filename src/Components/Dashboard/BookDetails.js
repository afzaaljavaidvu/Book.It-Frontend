import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

function BookDetails() {
  const [data,setData]=useState([]);
  const [comment,setComment]=useState("");
  const [responce,setResponce]=useState([]);
  const {id}=useParams();
  const [refresh,setRefresh]=useState(false);        
        const getData=async ()=>{
          const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}book/getBookById`,{ id:id },
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-Token':localStorage.getItem("token")
            }
          }
        );
        console.log("All Data : ",response.data);
        console.log("Filter Data : ",response.data.filter(data => data.BookISBN==id));
        setData(response.data.filter(data => data.BookISBN==id));
        }
        const PostComment=async (e)=>{
          e.preventDefault();
          const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}book/addBookComment`,{ id:data[0].BookISBN,comment:comment },
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-Token':localStorage.getItem("token")
            }
          }
        );
        console.log(response.data);
        setResponce(response.data);
        setRefresh(!refresh);
        setComment('')
        }
        useEffect(()=>{
            getData();
        },[refresh])

       return (
        <>
                   {data?.length>0&&(
                    <>
                   <div className='justify-content-center' style={{color:'white'}}>
                    <div className="card" style={{width: '55rem',color:'white',backgroundColor:'#5A7887'}} >
                    <div className='row'>
                      <div className='col-md-8'>
                        <div className="card-body">
                        <h5 className="card-title" style={{color:'white'}}><b>Book Title:</b> {data[0].BookTitle}</h5>
                        <h5 className="card-title" style={{color:'white'}}><b>Book ISBN:</b> {data[0].BookISBN}</h5>
                        <h5 className="card-text" style={{color:'white'}}><b>Written By - </b>{data[0].BookAuthor}</h5>
                        <h5 className="card-text" style={{color:'white'}}><b>Book Genre - </b> {data[0].BookGenre}</h5>
                        <h5 className="card-text" style={{color:'white',textAlign:'justify'}}><b>Book Summary - </b> {data[0].BookSummary}</h5>
                        <h5 className="card-text" style={{color:'white'}}><b>Book URL - </b> {data[0].BookLink.endsWith('.pdf')?<a target='_blank' href={data[0].BookLink} className='btn btn-success'><i class="fa-solid fa-file-pdf"></i></a>:<a target='_blank' href={data[0].BookLink} className='btn btn-success'><i class="fa-solid fa-globe"></i></a>} </h5>                  
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <img src="/images/main.jpeg" style={{width:'350px'}} alt='Image Main side of text'/>
                      </div>
                    </div>
                    </div>
                  <form onSubmit={PostComment} className='mt-2' style={{width: '55rem'}}>           
                    <div className="form-group">
                      <textarea className="form-control" value={comment} onChange={(e)=>setComment(e.target.value)} name="comment" rows={5} id="message" placeholder="Enter comment"/>
                    </div>
                    <button type="submit" className="btn btn-dark">Post</button>
                    {responce?.success===true? <p className="mt-2 text-center text-success">{responce?.message}</p>:''}
                    {responce?.success===false? <p className="mt-2 text-center text-danger">{responce?.message}</p>:''}
                  </form>
                  <div className='mt-3'>
                  <h5 style={{color:'white'}}>Latest Comments</h5>
                  {data[0].CommentData?.length>0?data[0].CommentData.map((data,index)=>(
                  <div className="card mb-2" style={{width: '55rem',backgroundColor:'#5A7887'}}>
                    <div className="card-body">
                    <h5 className="card-title" style={{color:'white'}}>{data.Comment}</h5>
                    <p>Commented By: {data.UserName}</p>
                    
                    </div>
                  </div>
)):<h5 style={{color:'white'}}>No any comments</h5>}
                  </div>
                  
                  </div>
</>
  )}
  </>
    )
}
export default BookDetails;