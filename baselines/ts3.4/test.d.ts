/// <reference path="./src/test.d.ts" />
/// <reference types="node" />
export class C {
    protected p: number;
    public readonly q: string;
    private r: boolean;
}
// hi, this should still be there
export namespace N {
    abstract class D {
        /*
        * @readonly
        * @memberof BlobLeaseClient
        * @type {number}
        
        preserve this too */
        p: number;
        readonly q: any;
        abstract r: boolean;
    }
}
/** is this a single-line comment? */
import { C as CD } from "./src/test";
import * as rex_1 from "./src/test";
//another comment
export { rex_1 as rex } from "./src/test";
export interface E {
    a: number;
    b: number;
}
/// is this a single-line comment?
export type F = Pick<E, Exclude<keyof E, 'a'>>;
export class G {
    private "G.#private";
}
export class H extends G {
    private "H.#private";
}
export interface I extends Pick<E, Exclude<keyof E, 'a'>> {
    version: number;
}
declare function guardIsString(val: any): val is string;
/** side-effects! */
declare function assertIsString(val: any, msg?: string): void;
declare function assert(val: any, msg?: string): void;
type J = [
    /*foo*/ string,
    /*bar*/ number,
    /*arr*/ ...boolean[]
];
