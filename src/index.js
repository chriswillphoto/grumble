import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import './animations.css'

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
