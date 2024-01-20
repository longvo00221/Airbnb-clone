import React from "react";
import ClientOnly from "../components/ClientOnly";
import { NextSeo } from 'next-seo';
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import ProfilePage from "./ProfilePage";

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
      <ProfilePage currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
