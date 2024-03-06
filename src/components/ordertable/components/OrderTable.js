import { useState, useEffect } from "react";
import { DataTable } from "react-native-paper";

const OrderTable = () => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = useState([
    {
      key: 1,
      name: "Amson Vaccines",
      date: "2024-01-22",
      value: 35634,
    },
    {
      key: 2,
      name: "Pharmedic Labs",
      date: "2024-01-24",
      value: 416945,
    },
    {
      key: 3,
      name: "Pharmasol Labs",
      date: "2024-02-25",
      value: 35634,
    },
    {
      key: 4,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Company</DataTable.Title>
        <DataTable.Title numeric>Order Date</DataTable.Title>
        <DataTable.Title numeric>Order Value (Rs)</DataTable.Title>
      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.date}</DataTable.Cell>
          <DataTable.Cell numeric>{item.value}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default OrderTable;
