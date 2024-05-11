'use stritic';

class Auth extends React.Component {
    render() {
        return (
            <div className ="auth_form">
                <TabList />
                <Log />
                <Reg />
            </div>
        );
    }
}

class TabList extends React.Component {
    render() {
        return(
            <ul className="tab-list" id="tab-list">
                <li className="active"><a className="tab-control" href="#tab-1"></a></li> 
            </ul>
        )
    }
}

class Log extends React.component {
    render() {
        return(
            <div className="tab-panel active wrapper " id="tab-1">
                <form id="log_from">
                    <input class="input-box__input-text" type="text" placeholder="login" id="lodin"/>
                    <br/>
                    <input class="input-box__input-text" type="password" placeholder="password" id="password"/>  
                    <div id="error_log"/>
                    <button class="btn btn_theme_base" type="button" id="log_but" ><span class="btn__text"></span></button>
                </form>
            </div>
        );
    }
}

class Reg extends React.component {
    render() {
        return(
        <div className="tab-panel active wrapper " id="tab-2">
        <form id="log_from">
            <input class="input-box__input-text" type="text" placeholder="name" id="name"/>
            <br/> 
            <input class="input-box__input-text" type="text" placeholder="login" id="login_reg"/>
            <br/>
            <input class="input-box__input-text" type="password" placeholder="password" id="pasword_reg"/>
            <br/>
            <input class="input-box__input-text" type="password" placeholder="repeat password" id="pasword_reg_repeat"/>
            <div id="error_log"/>
            <button class="btn btn_theme_base" type="button" id="lreg_but" ><span class="btn__text">Regist</span></button>
                
        </form>  
        </div>
        );
    }
}