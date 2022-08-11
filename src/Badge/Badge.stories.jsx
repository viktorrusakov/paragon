import Badge from './index';

export default {
  title: 'Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args}>Success</Badge>;

export const BadgeExample = Template.bind({});

BadgeExample.args = {
  as: 'span',
  variant: 'secondary',
  pill: false,
  bsPrefix: 'badge',
};
