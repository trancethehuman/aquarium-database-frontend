import { StandardNavBar } from '../../components/Bars/StandardNavBar';
import TankSizeCalculator from './TankSizeCalculator';

export const Tank = ({ getSearchTerm }) => {
    return (
        <>
            <StandardNavBar getSearchTerm={getSearchTerm}/>
            <TankSizeCalculator />
        </>
    );
}
