export interface AnyAction {
  type: string,
  payload: any,
  [key: string]: any
}