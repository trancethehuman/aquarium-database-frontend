import { FilterButton } from "../Button/FilterButton"

const FilterBar = ({getFilterCriterion}) => {
    return (
        <div>
            <FilterButton label='Beginner' filterCriterion='beginner' getFilterCriterion={getFilterCriterion}/>
            <FilterButton label='Intermediate' filterCriterion='intermediate' getFilterCriterion={getFilterCriterion}/>
            <FilterButton label='Difficult' filterCriterion='difficult' getFilterCriterion={getFilterCriterion}/>
            <FilterButton label='Plant Compatible' filterCriterion='yes' getFilterCriterion={getFilterCriterion}/>
        </div>
    )
}

export default FilterBar;