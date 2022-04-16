import { TypedUseSelectorHook, useSelector } from "react-redux"
import { Istate } from "store/reducer"

const useTypedSelector: TypedUseSelectorHook<Istate> = useSelector

export default useTypedSelector