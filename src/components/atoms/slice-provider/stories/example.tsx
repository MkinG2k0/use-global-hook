import { useState } from 'react'

import { SliceProvider } from 'components'
import { createSlice } from 'lib'
import { useSlice } from 'hook'

const nameSlice = createSlice(() => {
	const [name, setName] = useState('name')

	return { name, setName }
})

const formSlice = createSlice(() => {
	const [form, setForm] = useState<Record<string, any>>({})

	const setField = ({ name, value }: { name: string; value: any }) => {
		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const reset = () => {
		setForm({})
	}

	const get = (name: string) => form[name]

	return { form, get, reset, setField }
})

const arrSlice = createSlice(() => {
	const [arr, setArr] = useState([1])

	const add = (number: number) => {
		setArr((prev) => [...prev, number])
	}

	return { add, arr }
})

export const Example = () => {
	return (
		<SliceProvider providers={[nameSlice, arrSlice, formSlice]}>
			<TestComp />
		</SliceProvider>
	)
}

const TestComp = () => {
	const { name, setName } = useSlice(nameSlice)
	const { add, arr } = useSlice(arrSlice)
	const { form, get, reset, setField } = useSlice(formSlice)
	const [state, setState] = useState({})

	return (
		<div>
			<h3>TestComp</h3>
			{/*<div>*/}
			{/*	<div> {arr.map((item) => item.toString())} </div>*/}
			{/*	<button onClick={() => add(1)}>++</button>*/}
			{/*</div>*/}
			{/*<div>*/}
			{/*	<div>{name}</div>*/}
			{/*	<input value={name} onChange={(e) => setName(e.target.value)} />*/}
			{/*</div>*/}

			<input
				onChange={({ target: { value } }) =>
					setState((prevState) => ({ ...prevState, name: value }))
				}
				value={state['name']}
			/>
			<div>
				<button onClick={() => reset()}>reset</button>
			</div>
			{/*<input*/}
			{/*	value={get('name')}*/}
			{/*	onChange={(e) => setField({ name: 'name', value: e.target.value })}*/}
			{/*/>*/}
			{/*<div>{get('name')}</div>*/}

			{/*<input*/}
			{/*	value={get('age')}*/}
			{/*	onChange={(e) => setField({ name: 'age', value: e.target.value })}*/}
			{/*	type={'number'}*/}
			{/*/>*/}
			{/*<div>{get('age')}</div>*/}

			{/*<input*/}
			{/*	value={get('range')}*/}
			{/*	onChange={(e) => setField({ name: 'range', value: e.target.value })}*/}
			{/*	type={'range'}*/}
			{/*/>*/}
			{/*<div>{get('range')}</div>*/}
		</div>
	)
}
