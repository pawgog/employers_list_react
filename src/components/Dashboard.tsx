import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import useFetchingData from '../hooks/useFetchingData';
import EmployerDetails from './EmployerDetails';
import Toolbar from './Toolbar';
import { DashboardStyled, EmployersBoardStyled } from './Dashboard.styled';
import { sortEmployers } from '../utils/helpers';
import { IEmployerObject, ISortByValues } from '../utils/types';
import { staticText } from '../utils/staticText';

const apiUrl = 'https://api.1337co.de/v3/employees';

const Dashboard = () => {
    const [filter, setFilterBy] = useState('');
    const [selectSortOrder, setSelectSortOrder] = useState('');
    const [selectSortFilterBy, setSelectSortFilterBy] = useState('');
    const [employers, setEmployers] = useState<Array<IEmployerObject>>([]);
    const { data, isLoading, isError } = useFetchingData(apiUrl);

    console.log(data, isLoading, isError);

    useEffect(() => {
        setEmployers(data);
    }, [data]);

    const filterBy = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = e.target.value;
        const fileterEmployers = data.filter((employer) =>
            employer[selectSortFilterBy as keyof ISortByValues].toLowerCase().includes(filterValue.toLowerCase()),
        );
        setFilterBy(filterValue);
        setEmployers(fileterEmployers);
    };

    const handleChangeSelectBy = (e: SelectChangeEvent<string>) => {
        setSelectSortFilterBy(e.target.value);
        setSelectSortOrder('');
        setEmployers(data);
        setFilterBy('');
    };

    const handleChangeSelectOrder = (e: SelectChangeEvent<string>) => {
        const orderValue = e.target.value;
        const sortEmployersData = sortEmployers(employers, selectSortFilterBy, orderValue);
        setSelectSortOrder(e.target.value);
        setEmployers(sortEmployersData);
    };

    return (
        <DashboardStyled>
            <h3>{staticText.pageTitle}</h3>
            <Toolbar
                filter={filter}
                selectSortOrder={selectSortOrder}
                selectSortFilterBy={selectSortFilterBy}
                filterByFn={filterBy}
                handleChangeSelectByFn={handleChangeSelectBy}
                handleChangeSelectOrderFn={handleChangeSelectOrder}
            />
            <EmployersBoardStyled>
                {employers.map((employerData: IEmployerObject) => (
                    <EmployerDetails key={employerData.name} data={employerData} />
                ))}
            </EmployersBoardStyled>
        </DashboardStyled>
    );
};

export default Dashboard;
