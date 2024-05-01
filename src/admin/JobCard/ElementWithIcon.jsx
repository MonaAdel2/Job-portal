// another way to access the props label and icon instead of sending label and icon as seperated parameters
import PropTypes from 'prop-types'

function ElementWithIcon(probs){
    return (
        <div className="element-and-icon">
            <img className="card-icon" src={probs.icon} alt={probs.label + " icon"} style={{ width: '12px', height: '12px', marginLeft: "20px", marginRight: "4px"}} />
            <span>{probs.label}</span>
        </div>
    );

}

ElementWithIcon.probTypes = {
    label : PropTypes.string,
    icon : PropTypes.string,

}

ElementWithIcon.defaultProps = {
    label: "None",
    icon: "None",
}


export default ElementWithIcon