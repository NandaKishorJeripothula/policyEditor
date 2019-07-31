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
export default function PolicyManagement(props) {
  const { policies, setPolicies}= props;
  return (
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
      title="Policies"
      columns={policies.columns}
      data={policies.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...policies.data];
              console.log(newData);
              data.push(newData);
              setPolicies({ ...policies, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve =>
            setTimeout(() => {
              resolve();
              const data = [...policies.data];
              console.log(newData);
              data[data.indexOf(oldData)] = newData;
              setPolicies({ ...policies, data });
            }, 600)
          ),
        onRowDelete: oldData =>
          new Promise(resolve =>
            setTimeout(() => {
              const data = [...policies.data];
              data.splice(data.indexOf(oldData), 1);
              setPolicies({ ...policies, data });
            }, 600)
          )
      }}
    />
  );
}

PolicyManagement.propTypes = {
  policies: PropTypes.object.isRequired,
  setPolicies:PropTypes.func.isRequired
  // structure:PropTypes.object.isRequired
};


/**
 * Call Tabs with the parent data and then generate the tabs based on the user input
 */

 