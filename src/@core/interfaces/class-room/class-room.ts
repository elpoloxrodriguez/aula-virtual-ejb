export interface iClassRoom {
    id: number;
    name: string;
    url: string;
    title: string;
    time: string;
    status: number;
    img: string;
  }


  export interface iClassRoomItem {
    idClassRoom: number,
    id: number,
    name: string,
    description: string
  }