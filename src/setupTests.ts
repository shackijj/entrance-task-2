import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import './setupLocale';

configure({ adapter: new Adapter() });