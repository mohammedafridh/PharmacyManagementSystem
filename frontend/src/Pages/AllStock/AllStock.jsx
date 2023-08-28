import React, {useState, useEffect} from 'react'
import { MDBDataTable } from "mdbreact";

const AllStock = () => {

  const [tableData, setTableData] = useState();

  const columnData = [
    {
      label: "Tour Id",
      field: "id",
      sort: "asc",
      width: 250,
    },
    {
      label: "Guide Email",
      field: "email",
      sort: "asc",
      width: 200,
    },
    {
      label: "Tourist Email",
      field: "touristEmail",
      sort: "asc",
      width: 200,
    },
    {
      label: "Contact Number",
      field: "contact",
      sort: "asc",
      width: 150,
    },
    {
      label: "Tour Destination",
      field: "tourDestination",
      sort: "asc",
      width: 150,
    },
    {
      label: "Pick-up Destination",
      field: "pickupDestination",
      sort: "asc",
      width: 200,
    },
    {
      label: "From",
      field: "from",
      sort: "asc",
      width: 150,
    },
    {
      label: "To",
      field: "to",
      sort: "asc",
      width: 150,
    },
    {
      label: "Tour Time.",
      field: "time",
      sort: "asc",
      width: 150,
    },
    {
      label: "Status",
      field: "status",
      sort: "asc",
      width: 200,
    },
    {
      label: "Actions",
      field: "actions",
      sort: "asc",
      width: 130,
    },
  ];

  useEffect(()=>{
    setTableData({
      columns: columnData,
    });
  },[])


  return (
    <div className="allBookings">
      <h3>All Bookings</h3>
      <MDBDataTable scrollX striped bordered data={tableData} maxHeight="200px"/>
    </div>
  );
}

export default AllStock