import { useEffect, useState } from 'react';
import { ThemeProvider, Button, SelectChangeEvent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import useFetchingData from '../hooks/useFetchingData';
import EmployerDetails from './EmployerDetails';
import Toolbar from './Toolbar';
import { theme, fontLarge, fontRegular } from '../utils/theme';
import { DashboardStyled, DashboardTopBarStyled, EmployersBoardStyled, BoxStyled } from './Dashboard.styled';
import { sortEmployers, filterEmployers } from '../utils/helpers';
import { IEmployerObject } from '../utils/types';
import { staticText } from '../utils/staticText';

const apiUrl = 'https://api.1337co.de/v3/employees';

const Dashboard = () => {
    const [fontSize, setFontSize] = useState(true);
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
        const filterEmployersResult = filterEmployers(data, selectSortFilterBy, filterValue);
        setFilterBy(filterValue);
        setEmployers(filterEmployersResult);
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

    const handleFontSize = () => setFontSize((prevState) => !prevState);

    return (
        <ThemeProvider theme={theme}>
            <DashboardStyled style={fontSize ? fontRegular : fontLarge}>
                <DashboardTopBarStyled>
                    <h1>{staticText.pageTitle}</h1>
                    <BoxStyled>
                        <Button
                            variant="outlined"
                            color="info"
                            startIcon={
                                fontSize ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />
                            }
                            onClick={handleFontSize}
                        >
                            {staticText.fontSize}
                        </Button>
                    </BoxStyled>
                </DashboardTopBarStyled>
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
        </ThemeProvider>
    );
};

export default Dashboard;
