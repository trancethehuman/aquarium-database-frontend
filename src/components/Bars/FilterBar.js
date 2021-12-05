import { FilterButton } from "../Button/FilterButton"

const FilterBar = ({getFilterCriterion}) => {
    return (
        <div>
            <FilterButton label='Corydora' filterCriterion='Cory' getFilterCriterion={getFilterCriterion}/>
            <FilterButton label='Plant Compatible' filterCriterion='Yes' getFilterCriterion={getFilterCriterion}/>
            <FilterButton label='Carnivore' filterCriterion='Carnivore' getFilterCriterion={getFilterCriterion}/>
            <FilterButton label='Difficult' filterCriterion='Difficult' getFilterCriterion={getFilterCriterion}/>
        </div>
    )
}

export default FilterBar;