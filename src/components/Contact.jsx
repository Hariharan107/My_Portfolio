import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { sectionWrapper } from "../hoc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { slideIn } from "../utils/motion";

//template_941qrk6
//service_z04omek
//Ob9JsxpV_UVR7q_TC
const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name should be more than 4 characters")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please enter your email"),
    message: Yup.string()
      .min(10, "The message should be more than 10 characters")
      .required("Please enter your message"),
  });

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.65, 0.75)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setLoading(true);
            emailjs
              .send(
                "service_qza1hqp",
                "template_941qrk6",
                {
                  from_name: values.name,
                  to_name: "Hariharan MNJ",
                  from_email: values.email,
                  to_email: "hariharan107@gmail.com",
                  message: values.message,
                },
                "Ob9JsxpV_UVR7q_TC"
              )
              .then(
                () => {
                  setLoading(false);
                  alert(
                    "Thank you. I will get back to you as soon as possible"
                  );
                  resetForm();
                },
                (error) => {
                  setLoading(false);
                  
                  alert("something went wrong");
                }
              );
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form ref={formRef} className='mt-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <Field
                  type='text'
                  name='name'
                  placeholder="What's your good name?"
                  className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                    touched.name && errors.name ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name='name'
                  component='div'
                  className='text-red-500 mt-2'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <Field
                  type='email'
                  name='email'
                  placeholder="What's your Email?"
                  className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 mt-2'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                  Your Message
                </span>
                <Field
                  as='textarea'
                  rows='7'
                  name='message'
                  placeholder='What do you want to say?'
                  className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium ${
                    touched.message && errors.message ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name='message'
                  component='div'
                  className='text-red-500 mt-2'
                />
              </label>
              <button
                type='submit'
                disabled={loading}
                className='bg-tertiary py-3 px-8 outline-none text-white w-fit font-bold shadow-md shadow-primary rounded-xl'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.65, 0.75)}
        className='xl:flex-1 xl:h-auto md-h-[550px] h-[350px] '
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default sectionWrapper(Contact, "contact");
