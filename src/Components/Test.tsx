import React, { useState, useEffect } from "react";
import PoliciesTable from "./PoliciesTable";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {
  makeStyles,
  Theme,
  useTheme,
  createStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500
    }
  })
);

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function Test() {
  const [value, setValue] = React.useState(0);
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  function handleChangeIndex(index: number) {
    setValue(index);
  }
  const theme = useTheme();
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
        skillCategories: "Skill Categories"
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
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <PoliciesTable
          role="admin"
          policies={policies}
          getRules={[
            "reports",
            "interactions",
            "timeZoneCountrySpecific",
            "loginDetails"
          ]}
          setPolicies={setPolicies}
          policiesTable={policiesTable}
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PoliciesTable
          role="user"
          policies={policies}
          getRules={[
            "reports",
            "interactions",
            "timeZoneCountrySpecific",
            "loginDetails"
          ]}
          setPolicies={setPolicies}
          policiesTable={policiesTable}
        />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PoliciesTable
          role="admin"
          policies={policies}
          getRules={[
            "reports",
            "interactions",
            "timeZoneCountrySpecific",
            "loginDetails"
          ]}
          setPolicies={setPolicies}
          policiesTable={policiesTable}
        />
      </TabPanel>
    </React.Fragment>
  );
}
