import React, { HTMLProps } from 'react';
import styled from 'styled-components';

const TableBlock = styled.table`
  width: 100%;
  min-width: 30rem;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  padding: 2rem;
  margin-top: 20px;
  thead th {
    color: #666;
    font-weight: normal;
  }
  tbody {
    td {
      height: 3rem;
    }
    td:nth-child(3) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 20rem;
      & > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    tr {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 1rem;
    }
  }
`;

interface TableProps extends Omit<HTMLProps<HTMLTableElement>,"to">{}

const Table: React.FC<TableProps> = ({children}) => {
    return(
        <TableBlock>{children}</TableBlock>
    )
}

export default Table;