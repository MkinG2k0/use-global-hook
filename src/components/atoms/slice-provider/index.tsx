import { Context, PropsWithChildren } from 'react'

export interface ProviderProps<T> {
	providers: TSlice<T>[]
}

export interface TSlice<T> {
	context: Context<T>
	reducer: () => T
}

export const SliceProvider = ({ children, providers }: PropsWithChildren<ProviderProps<any>>) => {
	const provider = () => {
		let variable = children

		providers.forEach((curr) => {
			const { context, reducer } = curr

			variable = <context.Provider value={reducer()}>{variable}</context.Provider>
		})

		return variable
	}

	return <>{provider()}</>
}
