import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import { add} from "./../../actioncreators/libraries";
import { connect } from "react-redux";



const Formlib = (props) => {
    const onSubmit = (data) => {
        props.add(data);
    };
        
        
    // const handleChange = (event) => {
    //     let { name, value, type, checked } = event.currentTarget;
    //     if (type == "checkbox") {
    //       setData({
    //         ...data,
    //         [name]: checked,
    //       });
    //       console.log(checked);
    //     } else {
    //       setData({
    //         ...data,
    //         [name]: value,
    //       });
    //     }
    //   };

      return (
        <Formik
        initialValues={{
            bookTitle :'' ,
            years :'',
            bookNumber :'',
            status :'' 
        }}
        onSubmit={onSubmit}
        >
             <Form>
             <div className="container">
                 <div className="row justify-content-md-center">
                     <div className="col-sm-6">
                            <div class="form-group">
                                 <label for="title">Title</label>
                                 <input
                                   type="text"
                                   class="form-control"
                                   id="title"
                                   name="title"
                                //    value={data.title}
                                //    onChange={handleChange}
                                 />
                               </div>
                                <div class="form-group">
                                   <label for="year">Year</label>
                                   <input
                                     type="number"
                                     class="form-control"
                                     id="year"
                                     name="year"
                                    //  value={data.year}
                                    //  onChange={handleChange}
                                   />
                                 </div>
                                 <div class="form-group">
                                         <label for="number">Number</label>
                                         <input
                                           type="text"
                                           class="form-control"
                                           id="number"
                                           name="number"
                                        //    value={data.number}
                                        //    onChange={handleChange}
                                         />
                                       </div>
                                       <div class="form-group">
                                       <label for="status">Status</label>
                                       <input
                                       type ="text"
                                       class="form-control"
                                       id="status"
                                       name="status"
                                    //    checked={data.status}
                                    //    onChange={handleChange}
                                     />
                                     
                                 </div>
                               
                                 <button
                                    type="submit"
                                     className='btn btn-outline-primary'
                                     >
                                     Add Book
                                 </button>
                             </div>
                         </div>
                  </div>
            </Form>
            </Formik>
    );
}
const mapDispatchToProps = {
    add
  };
  
  export default connect(null, mapDispatchToProps)(Formlib);
