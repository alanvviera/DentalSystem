import { Text, Title } from "@mantine/core";
import CustomCard from "./CustomCard";

const DebtCard = ({ data }) => {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return (
    <CustomCard title="Adeudo" showMoreButton>
      <Title order={1}>{formatter.format(data.debt)} </Title>
      <Text size="lg" c="dimmed">
        {new Date(data.date).toLocaleDateString("es-mx", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Text>
    </CustomCard>
  );
};

export default DebtCard;
