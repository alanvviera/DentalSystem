import { Flex } from "@mantine/core";
import React, { ReactNode } from "react";

type VisualizeDataProps = {
  actionsTop?: ReactNode;
  content?: ReactNode;
  actionBottom?: ReactNode;
};

const VisualizeData = ({
  actionsTop,
  content,
  actionBottom,
}: VisualizeDataProps) => (
  <div className="min-w-full">
    {actionsTop && (
      <Flex direction="row" justify="end" mb={2}>
        {actionsTop}
      </Flex>
    )}
    {content && content}
    {actionBottom && actionBottom}
  </div>
);

export default VisualizeData;
