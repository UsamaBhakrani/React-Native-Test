import { useState } from "react";
import { DataTable } from "react-native-paper";

const OrderTable = () => {
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
    {
      key: 5,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
    {
      key: 6,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
    {
      key: 7,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
    {
      key: 8,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
    {
      key: 9,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
    {
      key: 10,
      name: "Cure9 Pharma",
      date: "2024-01-22",
      value: 1048,
    },
  ]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Company</DataTable.Title>
        <DataTable.Title numeric>Order Date</DataTable.Title>
        <DataTable.Title numeric>Value (Rs)</DataTable.Title>
      </DataTable.Header>

      {items.map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell textStyle={{ fontWeight: "bold" }}>
            {item.name}
          </DataTable.Cell>
          <DataTable.Cell numeric>{item.date}</DataTable.Cell>
          <DataTable.Cell numeric>{item.value}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default OrderTable;
