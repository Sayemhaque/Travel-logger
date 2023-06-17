/* eslint-disable react/prop-types */


const Button = ({title,bgColor}) => {
    return (
        <button className={`px-16 py-2 rounded-full font-bold ${bgColor}`}>
           {title} 
        </button>
    );
};

export default Button;