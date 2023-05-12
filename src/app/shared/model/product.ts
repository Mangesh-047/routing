export interface Iproduct {
    pname: string,
    pid: number,
    pstatus: pstatus
    canReturn: 1 | 0
}


export enum pstatus {
    inp = 'In Progress',
    dis = 'Dispatched',
    del = 'Delivered'
}

