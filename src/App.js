import React, { useState } from "react";
import Select from "react-select";
import "./App.css";
import {useForm,Controller} from "react-hook-form"
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import Bai1 from './Bai1'
import Bai2 from './Bai2'
// import Input from "@material-ui/core/Input";
// export default function App() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//   });

//   const handleSubmit = (event) => {
//     alert("A name was submit:" + form.name);
//     event.preventDefault();
//   };

//   return (
//     <form className="container" onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           name="name"
//           value={form.name}
//           onChange={(event) => {
//             setForm({
//               ...form,
//               name: event.target.value,
//             });
//           }}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           id="email"
//           name="email"
//           value={form.email}
//           onChange={(event) => {
//             setForm({
//               ...form,
//               email: event.target.value,
//             });
//           }}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default function App(){
//   const {handleSubmit, register, formState: {errors}} = useForm();
//   const sendData =(value) => {
//     console.log(value);

//   }
//   return(
//     <form onSubmit={handleSubmit(sendData)}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//         {...register('name')} id="name"
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//         {...register('email')} id="email"
//         />
//       </div>
//       <button>
//         Submit
//       </button>

//     </form>

//   )

// }
// const App = () => {
//   const {control, handleSubmit,formState: {errors} } = useForm({
//     defaultValues: {
//       firstName: '',
//       select: {}
//     }
//   })
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//       name="firstName"
//       control={control}
//       rules={{required: true}}
//       render={({ field }) => <input {...field} />}

//       />
        

//         {/* <Controller
//         name="select"
//         control={control}
//         render={({ field }) => <Select 
//           {...field} 
//           options={[
//             { value: "chocolate", label: "Chocolate" },
//             { value: "strawberry", label: "Strawberry" },
//             { value: "vanilla", label: "Vanilla" }
//           ]} 
//         />}
//       /> */}
//       <input type="submit" />
//       </form>
//   )
// }
// export default App;
// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default SignupForm;

//Thuc hanh 1
// export default function App() {
//   const [values, setValues] = useState({
//     email: '', password: '', confirmPassword: '', isRead: false,
//   });
//   const [errors, setErrors] = useState([]);

//   /// add function when value change
//   const handleChange = (event) => {
//     event.persist();

//     if (event.target.name === 'isRead') {
//       setValues({
//         ...values,
//         [event.target.name]: !values.isRead,
//       });
//     } else {
//       setValues({ ...values, [event.target.name]: event.target.value });
//     }

//   };

//   function validate() {
//     const { email, password, isRead, confirmPassword } = values;
//     // we are going to store errors for all fields
//     // in a signle array
//     const errors = [];

//     if (email.length < 5) {
//       errors.push("Email should be at least 5 characters long");
//     }
//     if (email.split("").filter((x) => x === "@").length !== 1) {
//       errors.push("Email should contain a @");
//     }
//     if (email.indexOf(".") === -1) {
//       errors.push("Email should contain at least one dot");
//     }
//     if (password.length < 6) {
//       errors.push("Password should be at least 6 characters long");
//     }
//     if (password !== confirmPassword) {
//       errors.push("Password should be at least 6 characters long");
//     }
//     if (!isRead) {
//       errors.push("You must be accepted privacy policy");
//     }
//     return errors;
//   }


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const errors = validate();
//     if (errors.length > 0) {
//       setErrors(errors);
//       return;
//     }
//   };

//   const stringJson = JSON.stringify(values);
//   return (
//     <div className="container">
//       <h1>Đăng ký</h1>
//       {errors.map((error) => (
//         <p key={error}>Error: {error}</p>
//       ))}
//       <form onSubmit={handleSubmit}>
//         <p>nhập email:</p>
//         <input
//           name="email"
//           type="text"
//           defaultValue={values.email}
//           onChange={handleChange}
//         />
//         <p>nhập password:</p>
//         <input
//           name="password"
//           type="password"
//           defaultValue={values.password}
//           onChange={handleChange}
//         />
//         <p>nhập lại password:</p>
//         <input
//           name="confirmPassword"
//           type="password"
//           defaultValue={values.confirmPassword}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label>
//           <input
//             name="isRead"
//             type="checkbox"
//             checked={values.isRead}
//             onChange={handleChange} />I read and accept the privacy policy:
//         </label>

//         <p>bấm submit form</p>
//         <button>submit nè</button>
//       </form>
//       <div className="show-json-string-setValues">{stringJson}</div>
//     </div>
//   );
// }
 //Thuc hanh 2
 
// export default function App() {
//   const [values, setValues] = useState({
//     email: '', password: '', confirmPassword: '', isRead: false,
//   });
//   // const [errors, setErrors] = useState([]);

//   const { register, handleSubmit, formState: { errors }, watch } = useForm();

//   /// add function when value change
//   const handleChange = (event) => {
//     event.persist();

//     if (event.target.name === 'isRead') {
//       setValues({
//         ...values,
//         [event.target.name]: !values.isRead,
//       });
//     } else {
//       setValues({ ...values, [event.target.name]: event.target.value });
//     }

//   };


//   console.log('errors', errors);


//   const stringJson = JSON.stringify(values);
//   return (
//     <div className="container">
//       <h1>Đăng ký</h1>
//       <form onSubmit={handleSubmit((data) => console.log(data))}>
//         <p>nhập email:</p>
//         <input
//           {...register('email', {
//             required: "Required",
//             pattern: {
//               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//               message: "invalid email address"
//             }
//           })}
//         />
//         {errors?.email && <div> {errors?.email?.message}</div>}
//         <p>nhập password:</p>
//         <input
//           {...register('password', {
//             required: "Required",
//             min: {
//               value: 3,
//               message: 'min length is 3'
//             },
//             max: {
//               value: 20,
//               message: 'min length is 20'
//             },
//           })}
//           type="password"
//         />
//         {errors?.password && <div> {errors?.password?.message}</div>}
//         <p>nhập lại password:</p>
//         <input
//           {...register('confirmPassword', {
//             required: "Required",
//             min: {
//               value: 3,
//               message: 'min length is 3'
//             },
//             max: {
//               value: 20,
//               message: 'min length is 20'
//             },
//             validate: (val) => {
//               if (watch('password') != val) {
//                 return "Your passwords do no match";
//               }
//             },
//           })}
//           type="password"
//         />
//         {errors?.confirmPassword && <div> {errors?.confirmPassword?.message}</div>}
//         <br />
//         <br />
//         <label>
//           <input
//             {...register('isRead', {
//               required: "Required",
//             })}
//             type="checkbox"
//           />I read and accept the privacy policy:
//         </label>

//         <p>bấm submit form</p>
//         <button>submit nè</button>
//       </form >
//       <div className="show-json-string-setValues">{stringJson}</div>
//     </div >
//   );
// }
// thuchanh3
// export default function App() {
//   const [values, setValues] = useState({
//     email: '', password: '', confirmPassword: '', isRead: false,
//   });

//   const stringJson = JSON.stringify(values);
//   return (
//     <div className="container">
//       <h1>Đăng ký</h1>
//       <Formik
//         initialValues={{ email: '', confirmPassword: '', password: '', isRead: false }}
//         validate={values => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = 'Required';
//           }
//           if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//             errors.email = 'Invalid email address';
//           }
//           if (!values.password) {
//             errors.password = 'Required';
//           }
//           if (!values.confirmPassword) {
//             errors.confirmPassword = 'Required';
//           }
//           if (values.confirmPassword !== values.password) {
//             errors.confirmPassword = 'Confirm password is not match';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <p>nhập email:</p>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             {errors.email && touched.email && <div className="error">{errors.email}</div>}
//             <br />
//             <p>nhập password:</p>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//             />
//             {errors.password && touched.password && <div className="error">{errors.password}</div>}
//             <br />
//             <p>nhập lại password:</p>
//             <input
//               type="confirmPassword"
//               name="confirmPassword"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.confirmPassword}
//             />
//             {errors.confirmPassword && touched.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//             <br />
//             <br />
//             <label>
//               <input
//                 name="isRead"
//                 type="checkbox"
//                 checked={values.isRead}
//                 onChange={handleChange} />I read and accept the privacy policy:
//             </label>
//             <br />
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </form>
//         )}
//       </Formik>
//       <div className="show-json-string-setValues">{stringJson}</div>
//     </div>
//   );
// } 

// Bai 1
// const MedicalDeclarationForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const onSubmit = (data) => {
//     setShowConfirmation(true);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="name">Họ và tên</label>
//         <input type="text" id="name" {...register('name', { required: true })} />
//         {errors.name && <span>This field is required</span>}
//         <br/>

//         <label htmlFor="address">Địa chỉ</label>
//         <input type="text" id="address" {...register('address', { required: true })} />
//         {errors.address && <span>This field is required</span>}
//         <br/>

//         <label htmlFor="phone">Số điện thoại</label>
//         <input type="tel" id="phone" {...register('phone', { required: true, pattern: /^\d+$/ })} />
//         {errors.phone && errors.phone.type === 'required' && <span>This field is required</span>}
//         {errors.phone && errors.phone.type === 'pattern' && <span>Please enter a valid phone number</span>}
//         <br/>

//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
//         {errors.email && errors.email.type === 'required' && <span>This field is required</span>}
//         {errors.email && errors.email.type === 'pattern' && <span>Please enter a valid email address</span>}
//         <br/>

//         <label htmlFor="symptoms">Triệu chứng trong vòng 14 ngày qua</label>
//         <div>
//           <input type="checkbox" id="fever" {...register('fever')} />
//           <label htmlFor="fever">Sốt</label>
//         </div>
//         <div>
//           <input type="checkbox" id="cough" {...register('cough')} />
//           <label htmlFor="cough">Ho</label>
//         </div>
//         <div>
//           <input type="checkbox" id="breath" {...register('breath')} />
//           <label htmlFor="breath">Khó thở</label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {showConfirmation && (
//         <div>
//           <p>Bạn có chắc chắn muốn gửi thông tin này không?</p>
//           <button onClick={() => setShowConfirmation(false)}>Không</button>
//           <button onClick={() => alert('Đã gửi thông tin')}>Có</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default MedicalDeclarationForm;
 
const EmailComposeForm = () => {
  
  const initialValues = {
    to: '',
    subject: '',
    message: '',
    attachment: null,
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.to) {
      errors.to = 'Required';
    }

    if (!values.subject) {
      errors.subject = 'Required';
    }

    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmed = window.confirm('Form đã được gửi');
    if (confirmed) {
      console.log('Form submitted!');
      setShowAlert(true);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="to">To</label>
      <input
        type="email"
        id="to"
        name="to"
        onChange={formik.handleChange}
        value={formik.values.to}
      />
      <br/>
      {formik.errors.to && formik.touched.to && <div>{formik.errors.to}</div>}

      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        onChange={formik.handleChange}
        value={formik.values.subject}
      />
       <br/>
      {formik.errors.subject && formik.touched.subject && (
        <div>{formik.errors.subject}</div>
      )}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
       <br/>
      {formik.errors.message && formik.touched.message && (
        <div>{formik.errors.message}</div>
      )}

      <label htmlFor="attachment">Attachment</label>
      <input
        type="file"
        id="attachment"
        name="attachment"
        onChange={(event) => {
          formik.setFieldValue('attachment', event.currentTarget.files[0]);
        }}
      />
       <br/>

      <button type="submit">Send</button>
      {showAlert && (
  <div className="alert">
   
  </div>
)}

    </form>
  );
};

export default EmailComposeForm; 

