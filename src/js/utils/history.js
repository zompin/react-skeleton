import { createBrowserHistory, createHashHistory } from 'history';

const history = NODE_ENV === 'development' ? createHashHistory() : createBrowserHistory();

export default history;
