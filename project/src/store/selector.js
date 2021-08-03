import { NameSpace } from "./root-reduser";

export const getConverter = (state) => state[NameSpace.LOAD].converterLoad;
export const getConverterHistory = (state) => state[NameSpace.LOAD].converterHistory;