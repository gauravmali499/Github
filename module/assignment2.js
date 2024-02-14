var sampleJson =[

    {

    "SellerDetails":{

        "SellerName": "Ravi Gupta",

        "SellerAddress": "Surdhara Complex, Naranpura",

        "City": "Ahmedabad",

        "State": "Gujarat",

        "Zip":382481,

        "Phone":8989898989,

        "Email":"seller@gmail.com"

    },

    "BuyerDetails": {

        "CompanyName" : "Radixweb",

        "Name": "Nitish Patel",

        "Address" : "B/H Nirma University, Ekyarth, Near Vandemataram Fabula, Malabar County Rd",

        "City": "Ahmedabad",

        "State": "Gujarat",

        "Zip":382481,

        "Phone":98989898,

        "Email":"buyer@gmail.com"

    },

    "ItemDetails": [

        {

            "ItemName":" Item1",

            "Description": "Description",

            "Quntity" : 1,

            "Price" : "$100",

            "Tax" : "10%",

            "Amount" : "$110"

        },

        {

        "ItemName":" Item2",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$200",

        "Tax" :" 20%",

        "Amount" : "$240"

        },

        {

        "ItemName":"Item3",

        "Description": "Description",

        "Quntity" : 3,

        "Price" : "$300",

        "Tax" : "10%",

        "Amount" : "$990"

        },

        {

        "ItemName":" Item4",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$400",

        "Tax" : "10%",

        "Amount" : "$440"

        },

        {

        "ItemName":" Item5",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$500",

        "Tax" : "10%",

        "Amount" : "$550"

        },

        {

        "ItemName":" Item6",

        "Description": "Description",

        "Quntity" : 2,

        "Price" : "$600",

        "Tax" : "10%",

        "Amount" : "$1320"

        },

        {

        "ItemName":" Item7",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$700",

        "Tax" : "10%",

        "Amount" : "$770"

        },

        {

        "ItemName":" Item8",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$800",

        "Tax" : "10%",

        "Amount" : "$880"

        },

        {

        "ItemName":" Item9",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$900",

        "Tax" : "15%",

        "Amount" : "$1035"

        },

        {

        "ItemName":" Item10",

        "Description": "Description",

        "Quntity" : 1,

        "Price" : "$450",

        "Tax" : "10%",

        "Amount" : "$495"
        }
    ]  
    }
]

let table = document.getElementById("table");

for (let i = 0; i < sampleJson[0].ItemDetails.length; i++) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = sampleJson[0].ItemDetails[i].ItemName;
    row.insertCell(1).innerHTML = sampleJson[0].ItemDetails[i].Description;
    row.insertCell(2).innerHTML = sampleJson[0].ItemDetails[i].Quntity;
    row.insertCell(3).innerHTML = sampleJson[0].ItemDetails[i].Price;
    row.insertCell(4).innerHTML = sampleJson[0].ItemDetails[i].Tax;
    row.insertCell(5).innerHTML = sampleJson[0].ItemDetails[i].Amount;
}

let SellerDetail = document.getElementById("seller");
SellerDetail.innerHTML = `<div style= "margin-left:60%"><p>Seller Address: ${sampleJson[0].SellerDetails.SellerAddress}</p><br><p>City, State, Zip: ${sampleJson[0].SellerDetails.City}, ${sampleJson[0].SellerDetails.State}, ${sampleJson[0].SellerDetails.Zip}</p><br><p> Phone: ${sampleJson[0].SellerDetails.Phone}</p><br><p> Email: ${sampleJson[0].SellerDetails.Email}</p><br><p> Seller Name: ${sampleJson[0].SellerDetails.SellerName}</p></div>`


let table1 = document.getElementById("table1");
var row1 = table1.insertRow();
row1.insertCell(0).innerHTML = `<p>Company Name: ${sampleJson[0].BuyerDetails.CompanyName}`;
row1.insertCell(1).innerHTML = "INVOICE#";

var row2 = table1.insertRow();
row2.insertCell(0).innerHTML = `<p>Name: ${sampleJson[0].BuyerDetails.Name}`;
row2.insertCell(1).innerHTML = "123456";

var row3 = table1.insertRow();
row3.insertCell(0).innerHTML = `<p>Address: ${sampleJson[0].BuyerDetails.Address}`;
row3.insertCell(1).innerHTML = "DATE";

var row4 = table1.insertRow();
row4.insertCell(0).innerHTML = `<p>City, State, Zip : ${sampleJson[0].BuyerDetails.City}, ${sampleJson[0].BuyerDetails.State}, ${sampleJson[0].BuyerDetails.Zip}`;
row4.insertCell(1).innerHTML = "14/03/2023";

var row5 = table1.insertRow();
row5.insertCell(0).innerHTML = `<p>Phone: ${sampleJson[0].BuyerDetails.Phone}`;
row5.insertCell(1).innerHTML = "INVOICE DUE DATE";

var row6 = table1.insertRow();
row6.insertCell(0).innerHTML = `<p>Email: ${sampleJson[0].BuyerDetails.Email}`;
row6.insertCell(1).innerHTML = "14/03/2023";