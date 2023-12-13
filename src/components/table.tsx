import React from "react";
import { Table } from "flowbite-react";

interface Status {
  name: string;
  address: string;
  nicNumber: string;
  certificateNo: string;
  status: string;
}

interface StatusTableProps {
  entries: Status[];
}

const StatusTable: React.FC<StatusTableProps> = ({ entries }) => {
  return (
    <div className="overflow-x-auto p-8">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Address</Table.HeadCell>
          <Table.HeadCell>NIC Number</Table.HeadCell>
          <Table.HeadCell>Certificate No</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {entries.map((status, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {status.name}
              </Table.Cell>
              <Table.Cell>{status.address}</Table.Cell>
              <Table.Cell>{status.nicNumber}</Table.Cell>
              <Table.Cell>{status.certificateNo}</Table.Cell>
              <Table.Cell>{status.status}</Table.Cell>
              <Table.Cell>
                <button className="transform transition hover:scale-105 duration-300 ease-in-out">
                  <a
                    href="#"
                    className="font-medium text-cyan-600 dark:text-cyan-500 "
                  >
                    Edit
                  </a>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StatusTable;
