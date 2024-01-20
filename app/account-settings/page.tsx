import React from "react";
import ClientOnly from "../components/ClientOnly";
import { NextSeo } from 'next-seo';
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import AccountSetting from "./AccountSetting";

const page = async () => {
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
      <AccountSetting currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
