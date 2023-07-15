function myfunction1() {
    const tip_percent = document.getElementById("slider-1").value;
    const no_of_people = document.getElementById("slider-2").value;
    const bill_amount = parseFloat(document.getElementById("bill-amount").value);
    const tip_amount = ((bill_amount)*(tip_percent/100)).toFixed(2);
    const total_amount  = (parseFloat(tip_amount) + parseFloat(bill_amount)).toFixed(2);
    const tip_pp = (tip_amount/no_of_people).toFixed(2);
    const total_pp = (total_amount/no_of_people).toFixed(2);

    document.querySelector(".tip h3 span").innerHTML = tip_amount;
    document.querySelector(".total h3 span").innerHTML = total_amount;
    document.getElementById("tip").innerHTML = tip_percent +"%"
    document.querySelector("#total_people").innerHTML = no_of_people;

    document.querySelector(".output-1 h3 span").innerHTML = tip_pp;
    document.querySelector(".output-2 h3 span").innerHTML = total_pp;
    console.log(3+3.21);

}