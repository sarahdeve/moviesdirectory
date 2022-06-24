import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Movieform({addDetails}) {
  const formik  = useFormik({
    initialValues: {
      nameInput:"",
      ratingsInput:"",
      durationInput:""
    },
    onSubmit:(values)=>{
      addDetails(values)
      console.log(values)
    },

    validationSchema: yup.object({
      nameInput : yup.string().required("Required Field"),
      ratingsInput : yup.string().required("Required Field"),
      durationInput : yup.string().required("Required Field")
  })
  })

  return (
        <section>
      <div className='card pa-30'>
        <form onSubmit={ formik.handleSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              name='nameInput'
              placeholder='Enter Movie Name'
              minLength='2'
              maxLength="30"
              data-testid='nameInput'
              className={formik.errors.nameInput ? "is-invalid" : "name"}
              onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
          </div>
            {          
               formik.touched.nameInput && <div className='text-danger'>{formik.errors.nameInput}</div>
            }
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              name='ratingsInput'
              minLength='1'
              maxLength="3"
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              className={formik.errors.ratingsInput ? "is-invalid" : "name"}
              onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
          </div>
            {
               formik.touched.ratingsInput && <div className='text-danger'>{formik.errors.ratingsInput}</div>
            }
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              name='durationInput'
              minLength='1'
              maxLength="15"
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              className={formik.errors.durationInput ? "is-invalid" : "name"}
              onChange={formik.handleChange} onBlur={formik.handleBlur}
            />
          </div>
            {
               formik.touched.durationInput && <div className='text-danger'>{formik.errors.durationInput}</div>
            }
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              disabled={!formik.isValid && formik.dirty}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
