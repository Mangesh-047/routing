export interface Iproduct {
    pname: string,
    pid: number,
    pstatus: pstatus
}


export enum pstatus {
    inp = 'In Progress',
    dis = 'Dispatched',
    del = 'Delivered'
}



// console.log(pstatus.dis);
