import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from "yup";
import TextError from './Form/TextError'

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social : {
    fb: 'http//fb',
    tw: 'http//tw',
  }
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const onSubmit = () => {};

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
          />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
          />
          <ErrorMessage name="comments">
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field
            type="text"
            id="address"
            name="address"
          >
            {
              (props) => {
                console.log('props', props);
                return <input id="address" />
              }
            }
          </Field>
          <ErrorMessage name="address">
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="comments">FB</label>
          <Field
            type="text"
            id="facebook"
            name="social.fb"
          />
          <ErrorMessage name="comments">
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="comments">TW</label>
          <Field
            type="text"
            id="twiter"
            name="social.tw"
          />
          <ErrorMessage name="comments">
          </ErrorMessage>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
