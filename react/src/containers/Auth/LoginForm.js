import React, { PropTypes } from 'react'
import { Field } from 'redux-form';

import InputButton from '../../components/Input/Button';
import InputText from '../../components/Input/Text';
import InputPassword from '../../components/Input/Password';

import { Layout, Row, Col } from 'antd';
import * as constants from '../../constants'

import logo from '../../assets/img/logo.svg';

const LoginForm = ({
    handleSubmit,
    loading,
    frm_error,
    submitting
}) => {
    let error = null;
    if (frm_error) {
        if (frm_error.response.status === 404) {
            error = <p>No connection with the server</p>;
        }
        else if (frm_error.json.message)
            error = <div>{frm_error.json.message}</div>;
    }

    return (
        <div>
        <Layout className="product-form-layout layout-main">
            <Row type="flex" justify="center">
                <Col xs={{ span: 5 }} lg={{ span: 6 }}>
                    <div className="content-box">
                        <div className="content-box-header">
                            <h1>
                                <span className="logo">
                                    <img src={logo} alt="AH"/>
                                </span>
                                Log in
                            </h1>
                        </div>
                        <div className="content-box-content">
                            <form onSubmit={handleSubmit}>
                                <Field name={`email`} component={InputText} label={`E-mailadres`}  />
                                <Field name={`password`} component={InputPassword} label={`Wachtwoord`}  />
                                <div >{error}</div>
                                <InputButton 
                                    disabled={submitting || loading} 
                                    htmlType="submit" 
                                    type="primary"
                                    size="large"
                                    >Log in</InputButton>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
        </div>
    )
};


LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default LoginForm;
