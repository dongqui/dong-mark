import Input from './index';
import { SearchIcon } from 'Icon';

export default {
  title: 'Input',
  component: Input,
};

export const Basic = () => <Input />;
export const Prefix = () => <Input prefix={<SearchIcon />} />;
export const Postfix = () => <Input postfix="postfix" />;
export const Width = () => <Input />;
