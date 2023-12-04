"use client";
import React from "react";
import EmployeeMenu from "../../components/employee-menu/EmployeeMenu";
import ClienMenu from "../../components/client-menu/ClientMenu";
import { useSession } from "next-auth/react";
import { Grid, GridCol, Skeleton } from "@mantine/core";

const page = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div>
        <Skeleton px="xl" py="lg" height={160} radius="8px" />
        <Grid px="15px" py="20px" gutter={{ base: 10, xs: "md", md: "lg" }}>
          <GridCol span={{ base: 12, md: 6, lg: 12 }}>
            <Skeleton height={200} radius="8px" />
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Skeleton height={200} radius="8px" />
          </GridCol>
          <GridCol span={{ base: 12, md: 12, lg: 6 }}>
            <Skeleton height={200} radius="8px" />
          </GridCol>
        </Grid>
      </div>
    );
  }
  const typeUser = session.user?.type_user;
  if (typeUser === "EMPLOYEE") {
    return <EmployeeMenu user={session.user} />;
  } else {
    return <ClienMenu />;
  }
};

export default page;
