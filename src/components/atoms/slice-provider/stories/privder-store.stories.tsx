import type { Meta, StoryObj } from '@storybook/react'

import { Example } from './example'

const meta: Meta<typeof Example> = {
	component: Example,
}

export default meta
type Story = StoryObj<typeof Example>

export const Primary: Story = {
	render: () => <Example />,
}
