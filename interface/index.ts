
import {
    __Pagination,
    __Response,
    __Direction,
    __Attachment,
    __AuthStatus,
    __Tokens,

} from './general';


export interface Pagination<T> extends __Pagination<T> {}
export interface Response<T> extends __Response<T> {}
export interface Tokens extends __Tokens {}
export { __AuthStatus as AuthStatus };
export interface Attachment extends __Attachment {}
export { __Direction as Direction };

