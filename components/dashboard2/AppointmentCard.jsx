import CustomCard from "./CustomCard";
import {
  TableScrollContainer,
} from "@mantine/core";
import CustomTable from "./CustomTable";

const AppointmentCard = ({ headers, items }) => {
  
  return (
    <CustomCard title="Citas" showAddButton showMoreButton>
      <TableScrollContainer type="native" minWidth={500}>
       <CustomTable headers={headers} items={items} />
      </TableScrollContainer>
    </CustomCard>
  );
};

export default AppointmentCard;
