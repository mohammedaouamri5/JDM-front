
export type UUID = string;

export interface Packet {
	start :number , 
	end   :number , 
	done  :boolean, 
}

export interface FILE {
    ID    : UUID    ,      
    output:string   ,          
    url   :string   ,          
    Packets:Packet[] ,          
}
export type iList = FILE[];

export interface ListResponse {
    data   : FILE[],
}


export interface Setting {
    PATH : string , 
}
