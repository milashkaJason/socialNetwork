import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/formControl/formControl';
import { maxLength, required } from '../../utils/validators/validators';
import style from './dialogs.module.css';
import Message from './message/message';
import Users from './user/user';



const Dialogs = (props) => {
    let newMessages = props.messages.map(m => <Message key={m.id} message={m.message} />);
    let newUsers = props.users.map(n => <Users key={n.id} name={n.name} />);
    let onSendMessage = (e) => {
        props.sendMessage(e.message);
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.users}>
                    {newUsers}
                </div>
                <div className={style.messages}>
                    {newMessages}
                    <MessageForm onSubmit={onSendMessage} />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

const maxlength100 = maxLength(100);

const MessageFormRedux = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxlength100]} component={Textarea} name='message' type='text'
                placeholder='entry your message' className={style.input} />
            <button className={style.btnSend}>send message</button>
        </form>
    )
}

const MessageForm = reduxForm({ form: 'messageDialogs' })(MessageFormRedux)

export default Dialogs;