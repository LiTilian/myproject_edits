'use stritic';

class Auth extends React.Component {
    render() {
        return (
            <div ClassName ="auth_form">
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