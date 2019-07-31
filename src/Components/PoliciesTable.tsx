import React, { useState } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import Clear from "@material-ui/icons/Clear";
import Delete from "@material-ui/icons/Delete";
import { Edit, ArrowUpwardSharp } from "@material-ui/icons";
import * as inflection from "inflection";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { CssBaseline } from "@material-ui/core";
interface Policy {
  licence: string;
  select: boolean;
  insert?: boolean;
  update?: boolean;
  delete?: boolean;
}

export default function PoliciesTable(props) {
  const { policiesTable, policies, setPolicies, role } = props;
  const getIndex = (objKey: String, objArray: [Policy]): number => {
    return objArray.findIndex(obj => obj.licence === objKey);
  };
  const isChecked = (objKey: String, objArray: [Policy]): boolean => {
    let i = getIndex(objKey, objArray);
    if (i != -1) return objArray[i].select;
    else return false;
  };
  const handleCheckBoxChange = (objKey: String, objArray: [Policy]) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let i = getIndex(objKey, objArray);
    const data = { ...policies };
    if (event.target.checked) {
      //Checked to true
      /**
       * if rule exist OVERRIDE
       * else add
       */
      if (i != -1) {
        //EXIST->OVERRIDE
        data[role].getRules[i] = {
          licence: objKey,
          select: event.target.checked
        };
      } else {
        data[role].getRules.push({
          licence: objKey,
          select: event.target.checked
        });
      }
    } else {
      //Checked to false
      /**
       * if rule exist REMOVE
       * else skip
       */
      if (i != -1) {
        //Exist->REMOVE
        data[role].getRules.splice(i, 1);
      } else {
        //SKIP
      }
    }
    setPolicies(data);
    // if (i != -1) {
    //   data[role].push({ licence: [objKey], select: [event.target.checked] });
    //   setPolicies(data);
    // }else{
    //     data[role][i]=({licence: [objKey], select: "true"});
    //     setPolicies(data);
    // }
  };

  return (
    <div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked("reports", policies[role].getRules)}
              onChange={handleCheckBoxChange("reports", policies[role].getRules)}
              value="reports"
            />
          }
          label="Reports"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked("interactions", policies[role].getRules)}
              onChange={handleCheckBoxChange(
                "interactions",
                policies[role].getRules
              )}
              value="interactions"
            />
          }
          label="Interactions"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked("loginDetails", policies[role].getRules)}
              onChange={handleCheckBoxChange(
                "loginDetails",
                policies[role].getRules
              )}
              value="loginDetails"
            />
          }
          label="LoginDetails"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked(
                "timeZoneCountrySpecific",
                policies[role].getRules
              )}
              onChange={handleCheckBoxChange(
                "timeZoneCountrySpecific",
                policies[role].getRules
              )}
              value="timeZoneCountrySpecific"
            />
          }
          label="TimeZones Country Specific
      "
        />
      </div>
      <CssBaseline />
      <MaterialTable
        icons={{
          Add: Add,
          Clear: Clear,
          Delete: Delete,
          Edit: Edit,
          SortArrow: ArrowUpwardSharp,
          ResetSearch: Clear,
          Check: Check,
          DetailPanel: ChevronRight,
          Export: SaveAlt,
          Filter: FilterList,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          Search: Search,
          ThirdStateCheck: Remove
        }}
        localization={{
          body: {
            emptyDataSourceMessage:
              "No Licence are provided, click + to add new"
          }
        }}
        title={`Policies for ${inflection.humanize(role)}`}
        columns={policiesTable}
        data={policies[role].allRules}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = { ...policies };
                data[role].allRules.push(newData);
                console.log(data);
                setPolicies(data);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve =>
              setTimeout(() => {
                resolve();
                const data = { ...policies };
                //Discard the tableData member
                console.log(newData);
                const { tableData, ...policy } = newData;
                console.log(policy);
                data[role][data[role].allRules.indexOf(oldData)] = policy;
                setPolicies(data);
              }, 600)
            ),
          onRowDelete: oldData =>
            new Promise(resolve =>
              setTimeout(() => {
                const data = { ...policies };
                data[role].splice(data[role].allRules.indexOf(oldData), 1);
                setPolicies(data);
              }, 600)
            )
        }}
      />
    </div>
  );
}

PoliciesTable.propTypes = {
  policies: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
  policiesTable: PropTypes.array.isRequired,
  setPolicies: PropTypes.func.isRequired
};

// const policiesTable=[
//     {
//       title: "Licence",
//       field: "licence",
//       lookup: {
//         users: "Users",
//         courses: "Courses",
//         groups: "Groups",
//         categories: "Categories",
//         branches: "Branches",
//         jobs: "Jobs",
//         roles: "Roles",
//         units: "Units",
//         curricula: "Curricula",
//         messages: "Messages",
//         skills: "Skills",
//         skillCategories: "Skill Categories",
//         reports: "Reports",
//         interactions: "Interactions",
//         timeZoneCountrySpecific: "TimeZones Country Specific",
//         meLoginDetails: "Me/Login Details"
//       }
//     },
//     { title: "Get", field: "select", type: "boolean", emptyValue: false },
//     { title: "Create", field: "insert", type: "boolean", emptyValue: false },
//     { title: "Edit", field: "update", type: "boolean", emptyValue: false },
//     { title: "Delete", field: "delete", type: "boolean", emptyValue: false }
//   ];
// const [policies, setPolicies] = useState({
//   //select: "false",insert:"false", update:"false", delete:"false",
//   roles: {
//     admin: { getRules:[],  allRules:[]},
//     user:[ {
//         licence: "Pick..."
//       }]
// });
