import TextInput from './TextInput';
import { SearchIcon } from 'Icon';

export default {
  title: 'TextInput',
  component: TextInput,
};

export const Basic = () => <TextInput />;
export const Prefix = () => <TextInput prefix={<SearchIcon />} />;
export const Postfix = () => <TextInput postfix="postfix" />;
export const Width = () => <TextInput />;
