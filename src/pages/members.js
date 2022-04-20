import React from 'react';
import {DashboardLayout} from '../components/Layout';
import EmployeeList from '../components/EmployeeList'


const MembersPage = () => {
  return (
    <DashboardLayout>
        <EmployeeList />
    </DashboardLayout>
  )
}

export default MembersPage;