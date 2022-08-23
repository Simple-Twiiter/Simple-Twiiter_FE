import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import SignUpLayout from "../../components/layout/SignUpLayout";
import SignUpForm from "../../components/users/SignUpForm";

function SignUp() {
  return (
    <SignUpLayout>
      <SignUpForm />
    </SignUpLayout>
  );
}

// SignUp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
// };

export default SignUp;
