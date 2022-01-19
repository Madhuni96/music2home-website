import React, {useState} from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { TopicContainer,
        InputContainer,
        ButtonContainer,
        MessageContainer,
        SpinnerContainer
     } from '../components/Customs';
import { Message } from "primereact/message";
import { signin_action } from '../redux/ADMIN/admin_actions';

export default function SignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const signin_state = useSelector(state => state.admin);
    const { admin_loading, admin_error } = signin_state;

    const payload = {
        username: username,
        password: password
    };


    return(
        <div className="background">
            <div className="center">
                <div className="card">
                    <div className="center">
                        <TopicContainer>Sign In</TopicContainer>
                    </div>
                    <div className="form-group center">
                        <InputContainer
                            type="text"
                            className="form-control"
                            id="usr"
                            name="username"
                            placeholder="User Name"
                            onChange={e => setUsername(e.target.value)}
                        ></InputContainer>
                    </div>
                    <div className="form-group center">
                        <InputContainer
                            type="password"
                            className="form-control"
                            id="pwd"
                            name="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        ></InputContainer>
                    </div>
                    {admin_error && admin_error.data && (
                        <Message
                            severity="error"
                            style={MessageContainer}
                            text={admin_error.data}
                        />
                    )}
                    {typeof admin_error === "undefined" ? (
                        <Message
                            severity="error"
                            style={MessageContainer}
                            text="Server is not running this time"
                        />
                    ) : (
                            <div></div>
                        )}
                    <div className="center">
                        <ButtonContainer onClick={() => dispatch(signin_action(payload))}>
                            Login
                        </ButtonContainer>
                    </div>
                    {admin_loading && (
                        <div className="center">
                            <SpinnerContainer className="spinner-border"></SpinnerContainer>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}