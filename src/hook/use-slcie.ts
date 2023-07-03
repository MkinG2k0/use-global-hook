import { useContext } from 'react'

import { TSlice } from 'components'

export const useSlice = <T>(slice: TSlice<T>) => useContext(slice.context)
