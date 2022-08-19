import useFetchingData from '../hooks/useFetchingData';
import EmployerDetails from './EmployerDetails';
import { DashboardStyled, EmployersBoardStyled } from './Dashboard.styled';
import { IEmployerObject } from '../utils/types';
import { staticText } from '../utils/staticText';

const Dashboard = () => {
    const { data, isLoading, isError } = useFetchingData();

    console.log(data, isLoading, isError);

    return (
        <DashboardStyled>
            <h3>{staticText.pageTitle}</h3>
            <EmployersBoardStyled>
                {data.map((employerData: IEmployerObject) => (
                    <EmployerDetails key={employerData.name} data={employerData} />
                ))}
            </EmployersBoardStyled>
        </DashboardStyled>
    );
};

export default Dashboard;
