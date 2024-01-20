import React from "react";
import ClientOnly from "../../components/ClientOnly";
import PersonalInfo from "./PersonalInfo";
import getCurrentUser from "../../actions/getCurrentUser";
import EmptyState from "../../components/EmptyState";

const PersonalInfoPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PersonalInfo currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PersonalInfoPage;
