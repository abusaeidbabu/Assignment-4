function deleteCard() {
    const totalJOb = document.getElementById('total-job');
    const totalJOb2 = document.getElementById('total-job-2');
}
document.getElementById('teb-content-1').addEventListener('click', function (event) {
    // console.log("Hello section")
    if (event.target.closest(".btn-delete")) {
        event.target.closest('.card').remove();
        const totalJOb = document.getElementById('total-job');
        const totalJOb2 = document.getElementById('total-job-2');

        const Jobs = document.getElementById('teb-content-1');
        const totalJobNumber = Jobs.children.length;
        console.log(totalJobNumber);
        totalJOb.innerText = totalJobNumber;
        totalJOb2.innerText = totalJobNumber;
    }
    else if(event.target.closest('.btn-interview')){
        console.log("Intervew button clicked");
    }
    else if(event.target.closest('.btn-rejected')){
        console.log("rejected button clicked")
    }
})