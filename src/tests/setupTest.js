// This file needs to be created for the new Enzyme v3 setup
import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adaptor()
});