import { ServerContext } from "../s3/types";

export function checkHeaders(context: ServerContext){
let k: keyof ServerContext
for (k in context) {
    if(!context[k]) throw new Error(`MISSING HEADER '${k}'`)
}
}