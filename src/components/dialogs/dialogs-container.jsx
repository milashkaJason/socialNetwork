import { connect } from 'react-redux';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';



const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        users: state.dialogsPage.users,
        newText: state.dialogsPage.newText
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect)(Dialogs)