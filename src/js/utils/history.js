import { createBrowserHistory, createHashHistory } from 'history';

// eslint-disable-next-line
const history = NODE_ENV === 'development' ? createHashHistory() : createBrowserHistory();

export default history;
