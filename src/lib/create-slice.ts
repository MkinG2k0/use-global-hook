import { createContext } from 'react'

import { TSlice } from 'components'

export function createSlice<T>(reducer: () => T): TSlice<T> {
	const context = createContext({} as T)

	return { context, reducer }
}
