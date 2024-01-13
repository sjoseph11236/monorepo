import type { Meta, StoryObj } from '@storybook/react';
import { Summary } from '.'


const meta = {
  title: 'Example/Summary',
  component: Summary,
} satisfies Meta<typeof Summary>

export default meta;
type Story = StoryObj<typeof meta>


export const Primary: Story = {
  args: {
    title: 'test title'
  }
}
