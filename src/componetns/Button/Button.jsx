/* eslint-disable react/prop-types */


const Button = ({title,bgColor,disable}) => {
    return (
        <button disabled={disable} className={`px-16 py-2 rounded-full font-bold ${bgColor}`}>
           {title} 
        </button>
    );
};

export default Button;