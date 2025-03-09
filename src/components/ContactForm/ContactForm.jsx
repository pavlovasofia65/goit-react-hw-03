import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd }) {

    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    });

    const inValues = {
        name:'',
        number:'',
    };

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        actions.resetForm();
    }
    return(
    <Formik
    initialValues={inValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}>
        <Form className={css.addForm}>
            <label htmlFor='name'>Name</label>
            <Field type='text' name='name' id='name' className={css.input}></Field>
            <ErrorMessage name='name' component='span'></ErrorMessage>

            <label htmlFor='number'>Number</label>
            <Field type='text' name='number' id='number' className={css.input}></Field>
            <ErrorMessage name='number' component='span'></ErrorMessage>

            <button type='submit' className={css.btn}>Submit</button>
        </Form>
    </Formik>);
}