import { Input } from "@mui/material";

export type UUID = string;

export interface Packet {
    start: number;
    end: number;
    done: boolean;
}

export interface FILE {
    ID: UUID;
    output: string;
    url: string;
    Packets: Packet[];
    IsDone: boolean;
    IsPause: boolean;
    name: string;
}
export type iList = FILE[];

export interface ListResponse {
    data: FILE[];
}

export interface Setting {
    PATH: string;
}

export interface RowT {
    ID: UUID;
    output: string;
    url: string;
    Packets: Packet[];
    IsDone: boolean;
    IsPause: boolean;
    name: string;
    progress: number;
    packetNb: number;
    state: State;
}

export class State {
    constructor(
        public name: string,
        public color: string,
        public icon?: string,
        public tailwindcss?: string,

    ) { }
    /**
     * NEW
     */
    public updateState(Input: FILE) {
        if (Input.IsDone) {
            this.setState(StateS.DONE);
        } else if (Input.IsPause) {
            this.setState(StateS.PAUSE);
        } else {
            this.setState(StateS.WORKING);
        }
    }

    private setState(state: State) {
        this.name = state.name;
        this.color = state.color;
        this.icon = state.icon;
    }

    toString() {
        return this.name;
    }

    equals(other: State) {
        return this.name === other.name;
    }
    notEquals(other: State) {
        return this.name !== other.name;
    }
    /**
     * copy
     */
    public copy() {
        return new State(this.name, this.color, this.icon);
    }
}

function createNewState(Input: FILE) {
    const newState = new State("NEW", "#NEW");
    newState.updateState(Input);
    return newState;
}

export const StateS = {
    DONE: new State("DONE", "#0F0", undefined, "bg-blue-500"),
    STOP: new State("STOP", "#F00", undefined, "bg-green-500"),
    WORKING: new State("WORKING", "#aaaaaa", undefined, "bg-black-500"),
    PAUSE: new State("PAUSE", "#aa00aa", undefined, "bg-red-500"),
    NEW: createNewState,
} as const;
