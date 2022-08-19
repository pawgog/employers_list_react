import useFetchingData from '../hooks/useFetchingData';
import { DashboardStyled } from './Dashboard.styled';
import { staticText } from '../utils/staticText';

function Dashboard() {
    const [data, isLoading, isError] = useFetchingData();

    console.log(data, isLoading, isError);

    return (
        <DashboardStyled>
            <h3>{staticText.pageTitle}</h3>
        </DashboardStyled>
    );
}

export default Dashboard;
