import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/formControl/formControl';
import s from '../../common/formControl/formControl.module.css';
import { login } from '../../redux/authReducer';
import { required } from '../../utils/validators/validators';

const Login = (props) => {

    let push = (e) => {
        props.login(e.login, e.password, e.rememberMe);
    }
    if (props.inAuth) return <Redirect to='/profile' />
    debugger
    return (
        <>
            <div>Login</div>
            <LoginFormRedux onSubmit={push} />
        </>
    )

}

const LoginForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit} >
            <div><Field validate={[required]} component={Input} type='text' name='login' placeholder='Login' /></div>
            <div><Field validate={[required]} component={Input} type='password' name='password' placeholder='password' /></div>
            <div><Field component={Input} type='checkbox' name='rememberMe' /> Remember Me</div>
            {props.error && <div className={s.someErrorLogin}>{props.error}</div>}
            <button>Login</button>
        </form>
    )
}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);


const mapStateToProps = (state) => ({
    inAuth: state.auth.inAuth
})

export default connect(mapStateToProps, { login })(Login);