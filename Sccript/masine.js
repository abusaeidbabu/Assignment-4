document.getElementById('teb-content-1').addEventListener('click', function (event) {
    // console.log("Hello section")
    let interviewobject=[];
    console.log(interviewobject);
    if (event.target.closest(".btn-delete")) {
        event.target.closest('.card').remove();
        const totalJOb = document.getElementById('total-job');
        const totalJOb2 = document.getElementById('total-job-2');

        const Jobs = document.getElementById('teb-content-1');
        const totalJobNumber = Jobs.children.length;
        console.log(totalJobNumber);
        totalJOb.innerText = totalJobNumber;
        totalJOb2.innerText = totalJobNumber;
        const status = ["bg-green"];
    }
    else if (event.target.closest('.btn-interview')) {
        console.log("Intervew button clicked");
        const card = event.target.closest('.card');
        const status = card.querySelector('.statusbar');
        status.innerText = "Interview";
        status.classList.add("bg-green-500", "text-black", "text-bold");
        status.classList.remove("bg-red-500",);
        const cardTitle = card.querySelector('.card-title').innerText;
        const jobTitle = card.querySelector(".job-title").innerText;
        const salary = card.querySelector(".salary").innerText;
        const jobText = card.querySelector(".job-text").innerText;
        const interviewTeb = document.getElementById('interview-teb');
        const interviewEmty = document.getElementById('interview-emty');
        const newelement = document.createElement("div");
        const interviewNum = document.getElementById("interview");
        const statusHtml=status.innerHTML;
        const interObject={
            company:cardTitle,
            job:jobTitle,
        }
        interviewobject.push(interObject);
       for(const item of interviewobject){
        console.log(item);
       }
        newelement.innerHTML = ` <div class="card bg-base-200 text-neutral-content w-11/12 mx-auto">
                    <div class="card-body  text-start">
                        <div class="flex justify-between">
                            <div>
                                <h2 class="card-title text-[#64748B]">${cardTitle}</h2>
                                <p class="job-title text-[#64748B] mt-2">${jobTitle}</p>
                            </div><button class="btn btn-delete">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                        <br>
                        <p class="salary text-[#64748B]">${salary}</p>
                        <h2 class="text-[#64748B] p-2 bg-amber-50 w-[100px] rounded border text-center statusbar">Not applied</h2>
                        <p class="job-text text-[#64748B]">${jobText}</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-interview bg-transparent border-green-400 hover:bg-green-500">interview</button>
                            <button class="btn btn-rejected bg-transparent border-red-500 hover:bg-red-500">Rejected</button>
                        </div>
                    </div>`
        const childstatus=newelement.querySelector(".statusbar");
        childstatus.innerHTML=statusHtml;
        childstatus.classList.add("bg-green-500","text-black");
        interviewTeb.appendChild(newelement);
        // Hisab hoccce inter view section er
        const childnumber = interviewTeb.children.length;
        console.log(childnumber);
        if (childnumber > 0) {
            interviewTeb.classList.remove("hidden");
            interviewEmty.classList.add("hidden");
        }
        interviewNum.innerText=childnumber;
    }
    else if (event.target.closest('.btn-rejected')) {
        const card = event.target.closest('.card');
        const status = card.querySelector('.statusbar');
        status.innerText = "Rejected";
        status.classList.add("bg-red-500", "text-black", "text-bold");
        status.classList.remove("bg-green-500");
        // console.log(status);
    }
})