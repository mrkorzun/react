import { Field, Form, Formik, type FormikHelpers } from "formik";
import Global from "../global/Global";
import type { PageInfo } from "../global/type";

interface FormikPracticeValues {
  username: string;
  email: string;
}

const initialValues: FormikPracticeValues = {
  username: "",
  email: "",
};

const FormikPractice = ({ date, title, module }: PageInfo) => {
  const handleSubmit = (
    values: FormikPracticeValues,
    action: FormikHelpers<FormikPracticeValues>,
  ) => {
    console.log("Order data:", values);
    action.resetForm();
  };
  return (
    <Global date={date} title={title} module={module}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="username" placeholder="Your Name.."></Field>
          <Field type="email" name="email" placeholder="text@test.com"></Field>
          <button type="submit">Place order</button>
        </Form>
      </Formik>
    </Global>
  );
};

export default FormikPractice;
