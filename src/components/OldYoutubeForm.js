import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
})

const onSubmit = () => {

}

function YoutubeForm() {
  const formik = useFormik({ 
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log('visitted >>>', formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {
          formik.errors.name && formik.touched.name ?  <div className='error'>{formik.errors.name}</div> : null
        }
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {
          formik.errors.email && formik.touched.email ?  <div className='error'>{formik.errors.email}</div> : null
        }
      </div>
      <div className="form-control">
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        {
          formik.errors.channel && formik.touched.channel ?  <div className='error'>{formik.errors.channel}</div> : null
        }
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default YoutubeForm;
