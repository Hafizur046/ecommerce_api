import React from 'react';

export default function Login({setLoginWindow}){
    function close(){
        setLoginWindow(false);
    }
    return(
        <div style={{display: 'block', opacity: 1}} class="modal fade" id="loginModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button onClick={close} type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
                </div>
                <div class="modal-body">
                    <div class="login">
                        <div class="login-form-container">
                            <div class="login-text">
                                <h2>login</h2>
                                <span>Please login using account detail bellow.</span>
                            </div>
                            <div class="login-form">
                                <form action="#" method="post">
                                    <input type="text" name="user-name" placeholder="Username" />
                                    <input type="password" name="user-password" placeholder="Password" />
                                    <div class="button-box">
                                        <div class="login-toggle-btn">
                                            <input type="checkbox" id="remember" />
                                            <label for="remember">Remember me</label>
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                        <button type="submit" class="default-btn floatright">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}