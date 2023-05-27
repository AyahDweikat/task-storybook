import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color:{control: 'color'},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant:'primary',
    label: 'Button',
  },
};

// export const Secondary = {
//   args: {
//     variant:'secondary',
//     label: 'Button',
//   },
// };

// export const Text = {
//   args: {
//     variant:'text',
//     label: 'Button',
//   },
// };
// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
