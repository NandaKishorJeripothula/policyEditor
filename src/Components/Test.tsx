import React, { useState, useEffect } from "react";
import PoliciesTable from "./PoliciesTable";

export default function Test() {
  const policiesTable = [
    {
      title: "Licence",
      field: "licence",
      lookup: {
        users: "Users",
        courses: "Courses",
        groups: "Groups",
        categories: "Categories",
        branches: "Branches",
        jobs: "Jobs",
        roles: "Roles",
        units: "Units",
        curricula: "Curricula",
        messages: "Messages",
        skills: "Skills",
        skillCategories: "Skill Categories",
        // reports: "Reports",
        // interactions: "Interactions",
        // timeZoneCountrySpecific: "TimeZones Country Specific",
        // loginDetails: "Me/Login Details"
      }
    },
    { title: "Get", field: "select", type: "boolean", emptyValue: () => false },
    {
      title: "Create",
      field: "insert",
      type: "boolean",
      emptyValue: () => false
    },
    {
      title: "Edit",
      field: "update",
      type: "boolean",
      emptyValue: () => false
    },
    {
      title: "Delete",
      field: "delete",
      type: "boolean",
      emptyValue: () => false
    }
  ];
  const [policies, setPolicies] = useState({
    //select: "false",insert:"false", update:"false", delete:"false",
    admin: {
      getRules: [],
      allRules: []
    },
    user: {
      getRules: [],
      allRules: []
    }
  });
  useEffect(() => {
    console.log(policies);
    return () => {
      //post the data to the server
    };
  }, [policies]);
  return (
    <PoliciesTable
      role="admin"
      policies={policies}
      setPolicies={setPolicies}
      policiesTable={policiesTable}
    />
  );
}
