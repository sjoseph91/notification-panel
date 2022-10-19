'use strict';

function Notifications() {
    return React.createElement(
        'main',
        { id: 'notifications' },
        'Notifications*******'
    );
}

var domContainer = document.querySelector('#notifications-panel');
ReactDOM.render(React.createElement(Notifications, null), domContainer);
// const root = ReactDOM.createRoot(domContainer);
// root.render(<Notifications/>);