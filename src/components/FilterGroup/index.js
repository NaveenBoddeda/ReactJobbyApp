import ProfileDetails from '../ProfileDetails'

import './index.css'

const FilterGroup = props => {
  const renderEmploymentTypeView = () => {
    const {employmentTypeDetails} = props
    return (
      <ul className="employment-type-container">
        <h1 className="head">Type of Employment</h1>
        {employmentTypeDetails.map(eachType => {
          const {onChangeEmploymentType} = props
          const onSelectEmploymentType = () => {
            onChangeEmploymentType(eachType.employmentTypeId)
          }

          return (
            <div>
              <li
                key={eachType.employmentTypeId}
                className="employment-type-element"
                onChange={onSelectEmploymentType}
              >
                <input
                  type="checkbox"
                  id={eachType.employmentTypeId}
                  value={eachType.employmentTypeId}
                />
                <label
                  className="label-element"
                  htmlFor={eachType.employmentTypeId}
                >
                  {eachType.label}
                </label>
              </li>
            </div>
          )
        })}
      </ul>
    )
  }

  const renderSalaryRangeView = () => {
    const {salaryRangeDetails} = props
    return (
      <ul className="employment-type-container">
        <h1 className="head">Salary Range</h1>
        {salaryRangeDetails.map(eachType => {
          const {onChangeSalary} = props
          const onSelectSalaryRange = () => {
            onChangeSalary(eachType.salaryRangeId)
          }

          return (
            <div>
              <li
                key={eachType.salaryRangeId}
                className="employment-type-element"
                onChange={onSelectSalaryRange}
              >
                <input
                  type="radio"
                  id={eachType.salaryRangeId}
                  value={eachType.salaryRangeId}
                  name="salary"
                />
                <label
                  className="label-element"
                  htmlFor={eachType.salaryRangeId}
                >
                  {eachType.label}
                </label>
              </li>
            </div>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentTypeView()}
      <hr className="horizontal-line" />
      {renderSalaryRangeView()}
    </>
  )
}

export default FilterGroup
