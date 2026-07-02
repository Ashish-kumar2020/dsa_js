

function meetingRooms(meetings) {
    const list = [];
    for(let meeting of meetings){
        list.push({timeStamps: meeting[0], roomChange: +1});
        list.push({timeStamps: meeting[1], roomChange: -1});
    }

    list.sort((a,b) => a.timeStamps - b.timeStamps);
    let minRoomChange = 0;
    let meetingInProgress = 0;

    for(let p of list){
        meetingInProgress += p.roomChange;
        minRoomChange = Math.max(minRoomChange,meetingInProgress);
    }
    return minRoomChange;
}