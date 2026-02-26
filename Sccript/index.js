const totalJOb = document.getElementById('total-job');
const totalJOb2 = document.getElementById('total-job-2');

const Jobs = document.getElementById('teb-content-1');
const totalJobNumber = Jobs.children.length;
console.log(totalJobNumber);
totalJOb.innerText = totalJobNumber;
totalJOb2.innerText = totalJobNumber;
// Delete Job Section with delete btn