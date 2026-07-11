// =====================
// Demo data
// minutes studied
// =====================

const studyData={

    "2026-01-03":20,
    "2026-01-08":60,
    "2026-01-09":90,
    "2026-02-11":40,
    "2026-02-13":150,
    "2026-03-21":70,
    "2026-04-10":25,
    "2026-05-15":120,
    "2026-06-08":30,
    "2026-07-11":160

};

// =====================

function level(mins){

    if(mins==0) return 0;

    if(mins<30) return 1;

    if(mins<60) return 2;

    if(mins<120) return 3;

    return 4;

}

const heatmap=document.getElementById("heatmap");

const year=2026;

const start=new Date(year,0,1);

const end=new Date(year,11,31);

let current=new Date(start);

// lùi về Chủ nhật đầu tiên để giống GitHub
current.setDate(current.getDate()-current.getDay());

while(current<=end){

    const date=current.toISOString().slice(0,10);

    const mins=studyData[date]||0;

    const cell=document.createElement("div");

    cell.className="day lv"+level(mins);

    cell.title=`${date}\n${mins} mins`;

    cell.onclick=()=>{

        alert(date);

    };

    heatmap.appendChild(cell);

    current.setDate(current.getDate()+1);

}
